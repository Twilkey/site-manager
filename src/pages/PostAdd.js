import { useParams } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import { Message, toaster, Form, Input, Button, Schema } from 'rsuite';

import InsertData from "../functions/InsertData";
import UpdateData from "../functions/UpdateData";

import FormField from "../components/FormField";
import TinyMCE from "../components/TinyMCE";

const { StringType } = Schema.Types;
const model = Schema.Model({
    title: StringType().isRequired('This field is required.')
});

const PostAdd = (props) => {
    const routeParams = useParams();
    const formRef = useRef();
    const fetchingComplete = useRef(false);
    const [pageTitle, setpageTitle] = useState('Add Post');
    const [formError, setFormError] = useState({});

    const [data, setData] = useState({
        title: "",
        content: "",
    });

    const removeExtraP = (str) => {
        return str.replace('<p>&nbsp;</p>')
    }

    useEffect(() => {
        if(fetchingComplete.current === false && (Object.keys(routeParams).length !== 0 && routeParams.constructor === Object)) {
            const getData = async () => {
                try {
                    await fetch(`${process.env.REACT_APP_BACKEND_URL}?` + new URLSearchParams({
                        enviornment: window.location.hostname,
                        action: 'get_custom',
                        fetchtype: 'single',
                        table: 'posts',
                        where: 'id=:id',
                        params: `id:${routeParams.id}`
                    }))
                    .then((response) => {
                        return response.json();
                    })
                    .then((result) => {
                        setpageTitle('Editing '+result.title);
                        setData({
                            title: result.title,
                            content: removeExtraP(result.content),
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
                    'posts', 
                    {
                        id: routeParams.id,
                        title: data.title,
                        content: removeExtraP(data.content)
                    }, 
                    'id=:id', 
                    pageTitle
                );
            } else {
                await InsertData(
                    toaster, 
                    Message,
                    'insert_custom', 
                    'posts', 
                    {
                        title: data.title,
                        content: removeExtraP(data.content)
                    }, 
                    '/post/list'
                );
            }
        } else {
            console.log(formError)
            toaster.push(<Message showIcon type="error"><pre>{JSON.stringify(formError)}</pre></Message>, { duration: 3000 });
        }
    }

    const handleEditorChange = (newValue) => {
        setData({ ...data, content: newValue });
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
                        <FormField name="title" label="Title" accepter={Input} error={formError.title} />
                    </div>
                    <div className='page-box-form-input'>
                        <label>
                            <h6>Content</h6>
                            <TinyMCE  value={data.content} onChange={handleEditorChange} />
                        </label>
                    </div>
                </div>
                <Form.Group>
                    <Button appearance="primary" onClick={handleSubmit}>Submit</Button>
                </Form.Group>
            </Form>
        </>
    );
}

export default PostAdd;