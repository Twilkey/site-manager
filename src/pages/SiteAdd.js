import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import { Message, toaster, Form, Input, SelectPicker, Button, Schema } from 'rsuite';
import { Triangle } from  'react-loader-spinner';

import checkSiteLabelExists from "../functions/checkSiteLabelExists";
import checkDomainEnviornmentExists from "../functions/checkDomainEnviornmentExists";
import InsertData from "../functions/InsertData";
import UpdateData from "../functions/UpdateData";
import getEnvironment from "../functions/getEnvironment";
import getVertical from "../functions/getVertical";
import getDomains from "../functions/getDomains";

//import GithubRepo from "../components/GithubRepo";
import FormTextarea from "../components/FormTextarea";
import FormField from "../components/FormField";

const { StringType, NumberType } = Schema.Types;
const model = Schema.Model({
    label: StringType().isRequired('This field is required.'),
    domain: NumberType().isRequired('This field is required.'),
    environment: NumberType().isRequired('This field is required.'),
    vertical: NumberType().isRequired('This field is required.'),
    url: StringType().isRequired('This field is required.')
});

const SiteAdd = (props) => {
    const routeParams = useParams();
	const navigate = useNavigate();
    const formRef = useRef();
    const fetchingComplete = useRef(false);
    const [pageTitle, setpageTitle] = useState('Add Site');
    const [domains, setDomains] = useState(null);
    const [formError, setFormError] = useState({});

    const [forceUpdateSiteData, setforceUpdateSiteData] = useState({
        theme: true,
        plugins: true,
        users: true,
    });
    const [isLoading, setIsLoading] = useState({
        theme: false,
        plugins: false,
        users: false,
    });

    const [oldData, setOldData] = useState({
        label: "",
        domain: "",
        environment: "",
    });

    const [data, setData] = useState({
        label: "",
        domain: "",
        environment: "",
        vertical: "",
        url: "",
        adminurl: "",
        githubowner: "",
        githubrepo: "",
        notes: "",
    });
  
    const environments = getEnvironment().map((item, index) => ({ label: item, value: index }));
    const verticals = getVertical().map((item, index) => ({ label: item, value: index }));
    
    useEffect(() => {
        if(fetchingComplete.current === false) {
            getDomains()
            .then((result) => {
                let items = result.map(
                    item => ({ label: item.domain, value: item.id })
                );
                setDomains(items);
            });

            if((Object.keys(routeParams).length !== 0 && routeParams.constructor === Object)) {
                setforceUpdateSiteData({
                    theme: false,
                    plugins: false,
                    users: false,
                });

                const getSite = async () => {
                    try {
                        await fetch(`${process.env.REACT_APP_BACKEND_URL}?` + new URLSearchParams({
                            enviornment: window.location.hostname,
                            action: 'get_site',
                            id: routeParams.id
                        }))
                        .then((response) => {
                            return response.json();
                        })
                        .then((result) => {
                            setpageTitle('Editing '+result.label);
                            setOldData({
                                label: result.label,
                                domain: result.domain,
                                environment: result.environment,
                            });
                            setData({
                                label: result.label,
                                domain: result.domain,
                                environment: result.environment,
                                vertical: result.vertical,
                                url: result.url,
                                adminurl: result.adminurl,
                                githubowner: result.githubowner,
                                githubrepo: result.githubrepo,
                                notes: result.notes,
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

                getSite();
            }
            fetchingComplete.current = true;
        }
    }, [routeParams, domains]);

    const updateSiteData = async (type, id) => {
        setIsLoading({...isLoading, [type]: true});
        await fetch(`${process.env.REACT_APP_BACKEND_URL}?` + new URLSearchParams({
            enviornment: window.location.hostname,
            action: `update_${type}`,
            id: id
        }))
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            setIsLoading({...isLoading, [type]: false});
            toaster.push(<Message showIcon type="success">{data.label} {type} was successfully updated</Message>, { duration: 3000 });
            return null;
        },
        (error) => {
            toaster.push(<Message showIcon type="error">There has been a problem with your fetch operation: {error}</Message>, { duration: 3000 });
            console.log(error)
        })
    }

    const handleQueries = async () => {
        if(routeParams.id) {
            await UpdateData(
                toaster, 
                Message,
                'update_site', 
                null, 
                {
                    id: routeParams.id,
                    label: data.label,
                    domain: data.domain,
                    environment: data.environment,
                    vertical: data.vertical,
                    url: data.url,
                    adminurl: data.adminurl,
                    githubowner: data.githubowner,
                    githubrepo: data.githubrepo,
                    notes: data.notes
                }, 
                'id=:id', 
                pageTitle
            )
            .then((result) => {
                if(forceUpdateSiteData.theme) {
                    updateSiteData('theme', routeParams.id);
                }
                if(forceUpdateSiteData.plugins) {
                    updateSiteData('plugins', routeParams.id);
                }
                if(forceUpdateSiteData.users) {
                    updateSiteData('users', routeParams.id);
                }
            });
        } else {
            await InsertData(
                toaster, 
                Message,
                'insert_site', 
                null, 
                {
                    label: data.label,
                    domain: data.domain,
                    environment: data.environment,
                    vertical: data.vertical,
                    url: data.url,
                    adminurl: data.adminurl,
                    githubowner: data.githubowner,
                    githubrepo: data.githubrepo,
                    notes: data.notes
                }, 
            )
            .then((result) => {
                if(forceUpdateSiteData.theme) {
                    updateSiteData('theme', result);
                }
                if(forceUpdateSiteData.plugins) {
                    updateSiteData('plugins', result);
                }
                if(forceUpdateSiteData.users) {
                    updateSiteData('users', result);
                }
                navigate(`/site/edit/${result}`);
            });
        }
    }
    
    const handleSubmit = () => {
        if(formRef.current.check()) {
            if(data.label === oldData.label && data.domain === oldData.domain && data.environment === oldData.environment) {
                handleQueries();
            } else {
                const promises = [];

                if(data.label !== oldData.label) {
                    promises.push(
                        checkSiteLabelExists(Message, toaster, data.label)
                        .then((result) => {
                            if(result > 0) {
                                toaster.push(<Message showIcon type="error">A site with that label already exists</Message>, { duration: 3000 });
                                return false;
                            } else {
                                return true;
                            }
                        })
                    );
                }
                
                if(data.domain !== oldData.domain || data.environment !== oldData.environment) {
                    promises.push(
                        checkDomainEnviornmentExists(Message, toaster, data.domain, data.environment)
                        .then((result) => {
                            if(result > 0) {
                                toaster.push(<Message showIcon type="error">A site with that environment already exists for that domain</Message>, { duration: 3000 });
                                return false;
                            } else {
                                return true;
                            }
                        })
                    );
                }
            
                if (promises.length > 0) {
                    Promise.all(promises)
                    .then((results) => {
                        if (results.every(result => result)) {
                            handleQueries();
                        }
                    });
                } else {
                    handleQueries();
                }
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
                        <FormField name="label" label="Label" accepter={Input} error={formError.label} />
                    </div>
                    <div className='page-box-form-input'>
                        {domains !== null && 
                            <FormField 
                                name="domain" 
                                label="Site Domain" 
                                data={domains} 
                                accepter={SelectPicker} 
                                error={formError.domain} 
                                block
                            />
                        }
                    </div>
                    <div className='page-box-form-input'>
                        <FormField name="environment" label="Environment" data={environments} accepter={SelectPicker} error={formError.environment} block />
                    </div>
                    <div className='page-box-form-input'>
                        <FormField name="url" label="Frontend URL" accepter={Input} error={formError.url} />
                    </div>
                    <div className='page-box-form-input'>
                        <FormField name="adminurl" label="Backend URL" accepter={Input} error={formError.adminurl} />
                    </div>
                    <div className='page-box-form-input'>
                        <FormField name="vertical" label="Vertical" data={verticals} accepter={SelectPicker} error={formError.vertical} block />
                    </div>
                    <div className='page-box-form-input'>
                        <label>
                            <h6>Github</h6>
                            <div className='page-box-flex'>
                                <div className='page-box-form-input page-box-flex-child'>
                                    <FormField name="githubowner" label="Owner" accepter={Input} error={formError.githubowner} />
                                </div>
                                <div className='page-box-form-input page-box-flex-child'>
                                    <FormField name="githubrepo" label="Repository" accepter={Input} error={formError.githubrepo} />
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
                <div className='page-box'>
                    <div className='page-box-form-input'>
                        <label>
                            <h6>Force Update Site Data</h6>
                        </label>
                    </div>
                    <div className='page-box-flex'>
                        {["theme", "plugins", "users"].map((type, index) => (
                            <div className='page-box-flex-child' key={index}>
                                <label>
                                    <h6>{type}</h6>
                                    <div className='page-box-form-input page-box-flex'>
                                        <input 
                                            type="checkbox" 
                                            id="checkbox" 
                                            checked={forceUpdateSiteData[type]} 
                                            onChange={(e) => setforceUpdateSiteData({...forceUpdateSiteData, [type]: !forceUpdateSiteData[type]})} 
                                        />
                                        {isLoading[type] &&  (
                                            <div className='triangle-loading'>
                                                <Triangle
                                                    height="20"
                                                    width="20"
                                                    color="#4caf50"
                                                    ariaLabel="triangle-loading"
                                                    visible={true}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='page-box'>
                    <div className='page-box-form-input'>
                        <FormField name="notes" label="Notes" accepter={FormTextarea} error={formError.notes} />
                    </div>
                </div>
                <Form.Group>
                    <Button appearance="primary" onClick={handleSubmit}>Submit</Button>
                </Form.Group>
            </Form>
        </>
    );
}

export default SiteAdd;