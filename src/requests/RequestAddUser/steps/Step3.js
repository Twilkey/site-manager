import React, { useState, useEffect, useRef, useContext } from 'react';
import { Form, Button, Message, toaster } from 'rsuite';
import { AuthContext } from '../../../AuthContext';

import getSite from "../../../functions/getSite";

const Step3 = (props) => {
    const { userData } = useContext(AuthContext);
    const { data, sitesData } = props;
    const fetchingComplete = useRef(false);
    const [siteList, setSiteList] = useState([]);

    useEffect(() => {
        if(fetchingComplete.current === false) {
            sitesData['sites'].forEach((site) => {
                try {
                    fetch(`${process.env.REACT_APP_BACKEND_URL}?` + new URLSearchParams({
                        enviornment: window.location.hostname,
                        action: 'userexists',
                        id: site,
                        username: data.username,
                        useremail: data.email,
                    }))
                    .then((response) => {
                        return response.json();
                    })
                    .then((user) => {
                        let parsedUser = JSON.parse(user);
                        getSite(site).then((userSite) => {
                            setSiteList((siteList) => {
                                const newItem = {
                                    siteid: site,
                                    label: userSite.label,
                                    requestType:
                                        parsedUser.username === false && parsedUser.useremail === false
                                            ? 'add'
                                            : parsedUser.username !== false && parsedUser.useremail === false
                                            ? 'editEmail'
                                            : parsedUser.username === false && parsedUser.useremail !== false
                                            ? 'editUsername'
                                            : parsedUser.same !== false
                                            ? 'editOther'
                                            : parsedUser.username !== false &&
                                              parsedUser.useremail !== false &&
                                              parsedUser.same === false
                                            ? 'conflicting'
                                            : undefined,
                                    data:
                                        parsedUser.username !== false && parsedUser.useremail === false
                                            ? parsedUser.username
                                            : parsedUser.username === false && parsedUser.useremail !== false
                                            ? parsedUser.useremail
                                            : parsedUser.same !== false
                                            ? parsedUser.same
                                            : undefined,
                                };

                                let checkboxes = {};
                                if (newItem.data !== undefined) {
                                    checkboxes = ['username', 'firstname', 'lastname', 'email', 'roles'].reduce((obj, key) => {
                                        if (data[key] !== newItem.data[key]) {
                                            obj[key] = key;
                                        }
                                        return obj;
                                    }, {});
                                }
                              
                                newItem.checkboxes = checkboxes;
                            
                                return {
                                    ...siteList,
                                    [site]: newItem,
                                };
                            });
                            
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
            });

            fetchingComplete.current = true;
        }
        
        console.log(siteList)
    }, [data, sitesData, siteList]);

    return (
        <>
            <div className='page-box'>
                <h2>Confirmation</h2>
                <div className='page-box-row'>
                    <div className='page-box-flex'>
                        <div className='page-box-flex-child'>
                            <label>Username</label>
                            <div>{data.username}</div>
                        </div>
                        <div className='page-box-flex-child'>
                            <label>Password</label>
                            <div>{data.password}</div>
                        </div>
                    </div>
                </div>
                <div className='page-box-row'>
                    <div className='page-box-flex'>
                        <div className='page-box-flex-child'>
                            <label>First Name</label>
                            <div>{data.firstname}</div>
                        </div>
                        <div className='page-box-flex-child'>
                            <label>Last Name</label>
                            <div>{data.lastname}</div>
                        </div>
                    </div>
                </div>
                <div className='page-box-row'>
                    <label>Email</label>
                    <div>{data.email}</div>
                </div>
                <div className='page-box-row'>
                    <label>Roles</label>
                    <div>{data.roles}</div>
                </div>
                <div className='page-box-row'>
                    <label>Approvers</label>
                    {userData && !userData.isapprover && 
                        <div>{data.approvers.join(', ')}</div>
                    }
                    {userData && userData.isapprover && 
                        <div>You are automatically the approver</div>
                    }
                </div>
                <div className='page-box-row'>
                    <label>Notes</label>
                    <div>{data.notes}</div>
                </div>
            </div>
            <div className='page-box'>
                {Object.entries(siteList).map((item, index) => {
                    if(item.requestType === 'add') {
                        return (
                            <div className='page-table-row-outter' key={index}>
                                <div className='page-table-row-inner'>
                                    <div className='page-table-column page-table-label'>Add {data.username} to {item.label}</div>
                                </div>
                            </div>
                        )
                    } else if(item.requestType === 'conflicting') {
                        return (
                            <div className='page-table-row-outter' key={index}>
                                <div className='page-table-row-inner'>
                                    <div className='page-table-column page-table-label'>There are multiple conflicting accounts on {item.label}</div>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div className='page-table-row-outter' key={index}>
                                <div className='page-table-row-inner'>
                                    {Object.entries(item.checkboxes).map((checkbox, index) => {
                                        return (
                                            <div key={index}><input type="checkbox" value={checkbox} />{checkbox}</div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
            <Form.Group>
                <Button appearance="primary" onClick={() => props.handleConfirm()}>Confirm</Button>
                <Button appearance="default" onClick={props.goBack}>Back</Button>
            </Form.Group>
        </>
    );
}

export default Step3;