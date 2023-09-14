import React, { useState, useEffect, useRef } from 'react';
import { Message, toaster, Form, Input, CheckPicker, Button, Schema } from 'rsuite';
import { useParams } from "react-router-dom";

import InsertData from "../functions/InsertData";
import UpdateData from "../functions/UpdateData";

import FormField from "../components/FormField";

const { StringType, ArrayType } = Schema.Types;
const model = Schema.Model({
    firstname: StringType().isRequired('This field is required.'),
    lastname: StringType().isRequired('This field is required.'),
    email: StringType()
    .isEmail('Please enter a valid email address.')
    .isRequired('This field is required.'),
    roles: ArrayType()
      .minLength(1, 'Please select at least 1 role.')
      .isRequired('This field is required.'),
});

const UsersAdd = (props) => {
    const routeParams = useParams();
    const formRef = useRef();
    const fetchingComplete = useRef(false);
    const [pageTitle, setpageTitle] = useState('Add User');
    const [formError, setFormError] = useState({});
    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        roles: []
    });
  
    const roleSelect = ['Administrator', 'Engineer', 'Manager'].map(
        item => ({ label: item, value: item })
    );

    useEffect(() => {
        if(fetchingComplete.current === false) {
            if(Object.keys(routeParams).length !== 0 && routeParams.constructor === Object) {
                const getData = async () => {
                    try {
                        await fetch(`${process.env.REACT_APP_BACKEND_URL}?` + new URLSearchParams({
                            enviornment: window.location.hostname,
                            action: 'get_custom',
                            fetchtype: 'single',
                            table: 'users',
                            where: 'id=:id',
                            params: `id:${routeParams.id}`
                        }))
                        .then((response) => {
                            return response.json();
                        })
                        .then((result) => {
                            setpageTitle('Editing '+result.firstname+' '+result.lastname);
                            setData({
                                firstname: result.firstname,
                                lastname: result.lastname,
                                email: result.email,
                                roles: Object.values(JSON.parse(result.roles))
                            });
                        },
                        (error) => {
                            console.log(error)
                            toaster.push(<Message showIcon type="error">{error.message}</Message>, { duration: 3000 });
                        });
                    } catch (error) {
                        console.log(error)
                        toaster.push(<Message showIcon type="error">{error.message}</Message>, { duration: 3000 });
                    }
                }

                getData();
            }
            fetchingComplete.current = true;
        }
    }, [routeParams, data]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(formRef.current.check()) {
            if(routeParams.id) {
                await UpdateData(
                    toaster, 
                    Message,
                    'update_custom', 
                    'users', 
                    {
                        id: routeParams.id,
                        firstname: data.firstname,
                        lastname: data.lastname,
                        email: data.email,
                        roles: JSON.stringify(data.roles.filter(Boolean)),
                    }, 
                    'id=:id', 
                    pageTitle
                );
            } else {
                await InsertData(
                    toaster, 
                    Message,
                    'insert_custom', 
                    'users', 
                    {
                        firstname: data.firstname,
                        lastname: data.lastname,
                        email: data.email,
                        roles: JSON.stringify(data.roles.filter(Boolean)),
                    }, 
                    '/user/list'
                );
            }
        } else {
            console.log(formError)
            toaster.push(<Message showIcon type="error"><pre>{JSON.stringify(formError)}</pre></Message>, { duration: 3000 });
        }
    }

    return (
        <>
            <Form
                ref={formRef}
                onChange={setData}
                onCheck={setFormError}
                formValue={data}
                model={model}
                fluid
            >
                <div className='page-title'>
                    <h1>{pageTitle}</h1>
                </div>
                <div className='page-box'>
                    <div className='page-box-form-input'>
                        <div className='page-box-flex'>
                            <div className='page-box-form-input page-box-flex-child'>
                                <FormField name="firstname" label="First Name" accepter={Input} error={formError.firstname} />
                            </div>
                            <div className='page-box-form-input page-box-flex-child'>
                                <FormField name="lastname" label="Last Name" accepter={Input} error={formError.lastname} />
                            </div>
                        </div>
                    </div>
                    <div className='page-box-form-input'>
                        <FormField name="email" label="Email" accepter={Input} error={formError.email} />
                    </div>
                    <div className='page-box-form-input'>
                        <FormField name="roles" label="Roles" data={roleSelect} accepter={CheckPicker} error={formError.roles} block sticky />
                    </div>
                </div>
                <Form.Group>
                    <Button appearance="primary" onClick={handleSubmit}>Submit</Button>
                </Form.Group>
            </Form>
        </>
    );
}

export default UsersAdd;