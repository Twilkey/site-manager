import React, { useState, useEffect, useRef, useContext } from 'react';
import { Form, Input, SelectPicker, CheckPicker, Button, Schema, Message, toaster } from 'rsuite';
import { AuthContext } from '../../../AuthContext';

import FormField from "../../../components/FormField";
import FormTextarea from "../../../components/FormTextarea";

import getUserRoles from "../../../functions/getUserRoles";
import getApprovers from "../../../functions/getApprovers";

const { StringType, ArrayType } = Schema.Types;
const Step1 = (props) => {
    const { userData } = useContext(AuthContext);

    const modelObj = {
        password: StringType().isRequired('This field is required.'),
        firstname: StringType().isRequired('This field is required.'),
        lastname: StringType().isRequired('This field is required.'),
        email: StringType()
            .isEmail('Please enter a valid email address.')
            .isRequired('This field is required.'),
        roles: StringType().isRequired('This field is required.'),
    }

    if(userData && !userData.isapprover) {
        modelObj['approvers'] = ArrayType()
                                .minLength(1, 'Please select at least 1 approver.')
                                .isRequired('This field is required.');
    }

    const model = Schema.Model(modelObj);

    const { data, buttonText } = props;
    const formRef = useRef();
    const [formError, setFormError] = useState({});
    const [approversSelect, setApproversSelect] = useState([]);
  
    const roleSelect = getUserRoles().map(item => ({ label: item, value: item.toLowerCase() }));

    useEffect(() => {
        getApprovers(Message, toaster).then((response) => {
            let select = response.map(
                item => ({ 
                    label: `${item.firstname} ${item.lastname} (${item.email})`, 
                    value: item.id 
                })
            );
            setApproversSelect(select);
        });
    }, [userData]);

    return (
        <>
            <Form
                ref={formRef}
                onChange={props.setData}
                onCheck={setFormError}
                formValue={data}
                model={model}
                fluid
            >
                {Object.keys(userData).length > 0 && userData.isapprover && 
                    <div className='page-box'>You are automatically approved.</div>
                }
                <div className='page-box'>
                    <div className='page-box-form-input'>
                        <div className='page-box-flex'>
                            <div className='page-box-form-input page-box-flex-child'>
                                <FormField name="username" label="Username" accepter={Input} error={formError.username} readOnly />
                            </div>
                            <div className='page-box-form-input page-box-flex-child'>
                                <FormField name="password" label="Password" accepter={Input} error={formError.password} />
                            </div>
                        </div>
                    </div>
                    <div className='page-box-form-input'>
                        <div className='page-box-flex'>
                            <div className='page-box-form-input page-box-flex-child'>
                                <FormField name="firstname" label="First Name" accepter={Input} error={formError.firstname} onChange={props.updateUsername} />
                            </div>
                            <div className='page-box-form-input page-box-flex-child'>
                                <FormField name="lastname" label="Last Name" accepter={Input} error={formError.lastname} onChange={props.updateUsername} />
                            </div>
                        </div>
                    </div>
                    <div className='page-box-form-input'>
                        <FormField name="email" label="Email" accepter={Input} error={formError.email} />
                    </div>
                    <div className='page-box-form-input'>
                        <FormField name="roles" label="Role" data={roleSelect} accepter={SelectPicker} error={formError.roles} block />
                    </div>
                    {Object.keys(userData).length > 0 && !userData.isapprover && 
                        <div className='page-box-form-input'>
                            <FormField name="approvers" label="Approvers" data={approversSelect} accepter={CheckPicker} error={formError.approvers} block sticky />
                        </div>
                    }
                    <div className='page-box-form-input'>
                        <FormField name="notes" label="Notes" accepter={FormTextarea} error={formError.notes} />
                    </div>
                </div>
                <Form.Group>
                    <Button appearance="primary" onClick={() => props.handleSubmit(formRef)}>{buttonText}</Button>
                </Form.Group>
            </Form>
        </>
    );
}

export default Step1;