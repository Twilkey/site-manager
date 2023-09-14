import React, { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import { Message, toaster, Form, Input, Button, Schema } from 'rsuite';

import FormField from "../components/FormField";

import InsertData from "../functions/InsertData";
import UpdateData from "../functions/UpdateData";

const { StringType } = Schema.Types;
const model = Schema.Model({
    name: StringType().isRequired('This field is required.')
});

const RegistrarAdd = (props) => {
    const routeParams = useParams();
    const formRef = useRef();
    const fetchingComplete = useRef(false);
    const [pageTitle, setpageTitle] = useState('Add Registrar');
    const [formError, setFormError] = useState({});

    const [data, setData] = useState({
        name: "",
    });

    useEffect(() => {
        if(fetchingComplete.current === false) {
            if(Object.keys(routeParams).length !== 0 && routeParams.constructor === Object) {
                const getData = async () => {
                    try {
                        await fetch(`${process.env.REACT_APP_BACKEND_URL}?` + new URLSearchParams({
                            enviornment: window.location.hostname,
                            action: 'get_custom',
                            fetchtype: 'single',
                            table: 'registrars',
                            where: 'id=:id',
                            params: `id:${routeParams.id}`
                        }))
                        .then((response) => {
                            return response.json();
                        })
                        .then((result) => {
                            setpageTitle('Editing '+result.domain);
                            setData({
                                domain: result.domain,
                                registrar: result.registrar,
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
    }, [routeParams]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(formRef.current.check()) {
            if(routeParams.id) {
                await UpdateData(
                    toaster, 
                    Message,
                    'update_custom', 
                    'registrars', 
                    {
                        id: routeParams.id,
                        name: data.name
                    }, 
                    'id=:id', 
                    pageTitle
                );
            } else {
                await InsertData(
                    toaster, 
                    Message,
                    'insert_custom', 
                    'registrars', 
                    {
                        name: data.name
                    }, 
                    '/domain/registrar/list'
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
                        <FormField name="name" label="Name" accepter={Input} error={formError.name} />
                    </div>
                </div>
                <Form.Group>
                    <Button appearance="primary" onClick={handleSubmit}>Submit</Button>
                </Form.Group>
            </Form>
        </>
    );
}

export default RegistrarAdd;