import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { Message, toaster, Form, Input, SelectPicker, Button, Schema } from 'rsuite';

import InsertData from "../functions/InsertData";
import UpdateData from "../functions/UpdateData";
import getRegistrars from "../functions/getRegistrars";
import generateApiKey from "../functions/generateApiKey";

import FormField from "../components/FormField";

const { StringType, NumberType } = Schema.Types;
const model = Schema.Model({
    domain: StringType().isRequired('This field is required.'),
    registrar: NumberType().isRequired('This field is required.'),
    apisecret: StringType().isRequired('This field is required.')
});

const DomainAdd = (props) => {
    const routeParams = useParams();
	const navigate = useNavigate();
    const formRef = useRef();
    const fetchingComplete = useRef(false);
    const [pageTitle, setpageTitle] = useState('Add Domain');
    const [formError, setFormError] = useState({});
    const [selectRegistrars, setSelectRegistrars] = useState([]);

    const [data, setData] = useState({
        domain: "",
        registrar: "",
        apisecret: "",
    });

    useEffect(() => {
        if(fetchingComplete.current === false) {
            getRegistrars()
            .then((result) => {
                let roleSelect = result.map(
                    item => ({ label: item.name, value: item.id })
                );

                setSelectRegistrars(roleSelect);
            });

            if(Object.keys(routeParams).length !== 0 && routeParams.constructor === Object) {
                const getData = async () => {
                    try {
                        await fetch(`${process.env.REACT_APP_BACKEND_URL}?` + new URLSearchParams({
                            enviornment: window.location.hostname,
                            action: 'get_custom',
                            fetchtype: 'single',
                            table: 'domains',
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
                                apisecret: result.apisecret,
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
    }, [routeParams, selectRegistrars]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(formRef.current.check()) {
            if(routeParams.id) {
                await UpdateData(
                    toaster, 
                    Message,
                    'update_custom', 
                    'domains', 
                    {
                        id: routeParams.id,
                        domain: data.domain,
                        registrar: data.registrar,
                        apisecret: data.apisecret
                    }, 
                    'id=:id', 
                    pageTitle
                );
            } else {
                await InsertData(
                    toaster, 
                    Message,
                    'insert_custom', 
                    'domains', 
                    {
                        domain: data.domain,
                        registrar: data.registrar,
                        apisecret: generateApiKey(64)
                    }, 
                    navigate,
                    '/domain/list'
                );
            }
        } else {
            console.log(formError)
            toaster.push(<Message showIcon type="error"><pre>{JSON.stringify(formError)}</pre></Message>, { duration: 3000 });
        }
    }

    const generateNewKey = () => {
        setData({ ...data, apisecret: generateApiKey(64) });
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
                        <FormField name="domain" label="Domain" accepter={Input} error={formError.domain} />
                    </div>
                    <div className='page-box-form-input'>
                        <FormField name="registrar" label="Registrar" data={selectRegistrars} accepter={SelectPicker} error={formError.registrar} block />
                    </div>
                </div>
                <div className='page-box'>
                    <div className='page-box-form-input'>
                        <FormField name="apisecret" label="API Secret" accepter={Input} error={formError.apisecret} readOnly />
                    </div>
                    <Form.Group>
                        <Button color="red" appearance="ghost" onClick={(e) => generateNewKey()}>Generate New API Secret</Button>
                    </Form.Group>
                </div>
                <Form.Group>
                    <Button appearance="primary" onClick={handleSubmit}>Submit</Button>
                </Form.Group>
            </Form>
        </>
    );
}

export default DomainAdd;