import React, { useState, useEffect, useRef, useContext } from 'react';
import { useParams } from "react-router-dom";
import { Message, toaster } from 'rsuite';
import { AuthContext } from '../../AuthContext';

import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";

// import InsertData from "../../functions/InsertData";
// import UpdateData from "../../functions/UpdateData";

const RequestAddUser = (props) => {
    const routeParams = useParams();
    const fetchingComplete = useRef(false);
    const { userData } = useContext(AuthContext);
    const [pageTitle, setPageTitle] = useState('Request User Account');
    const [buttonText, setButtonText] = useState('Select Sites');
    const [currentStep, setCurrentStep] = useState('1');
    const [sitesData, setSitesData] = useState({
        sites: []
    });
    const [data, setData] = useState({
        type: 'useradd',
        requester: userData.userPrincipalName,
        approvers: userData.isapprover ? [userData.userPrincipalName] : [],
        approved: userData.isapprover ? 1 : 0,
        notes: '',
        username: '',
        password: '',
        firstname: '',
        lastname: '',
        email: '',
        roles: ''
    });

    useEffect(() => {
        if(fetchingComplete.current === false) {
            if(Object.keys(routeParams).length !== 0 && routeParams.constructor === Object) {
                setButtonText('Save');

                const getData = async () => {
                    try {
                        await fetch(`${process.env.REACT_APP_BACKEND_URL}?` + new URLSearchParams({
                            enviornment: window.location.hostname,
                            action: 'get_custom',
                            fetchtype: 'single',
                            fields: 'requests.*, sites.label AS site_label',
                            table: "requests LEFT JOIN sites on JSON_EXTRACT(requests.request, '$.siteid') = sites.id",
                            where: 'id=:id',
                            params: `id:${routeParams.id}`
                        }))
                        .then((response) => {
                            return response.json();
                        })
                        .then((result) => {
                            setPageTitle('Editing User Account Request');
                            setData((prevData) => ({
                                ...prevData,
                                requester: result.requester,
                                notes: result.notes,
                                site_label: result.site_label,
                                siteid: result.request.siteid,
                                username: result.request.username,
                                password: result.request.password,
                                firstname: result.request.firstname,
                                lastname: result.request.lastname,
                                email: result.request.email,
                                roles: result.request.roles.split(",")
                            }));
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
    }, [routeParams, fetchingComplete]);

    const updateUsername = () => {
        setData((prevData) => ({
            ...prevData,
            username: prevData.lastname.length > 0 
                        ? prevData.firstname.toLowerCase().replace(/[^a-z0-9]/g, '.')+'.'+prevData.lastname.toLowerCase().replace(/[^a-z0-9]/g, '.')
                        : prevData.firstname.toLowerCase().replace(/[^a-z0-9]/g, '.')
        }));
    };

    const handleSubmit = (formRef) => {
        if(formRef.current.check()) {
            if(routeParams.id) {
                setCurrentStep('3');
            } else {
                if(currentStep === '1') {
                    setCurrentStep('2');
                } else {
                    setCurrentStep('3');
                }
            }
        }
    }

    const goBack = () => {
        if(routeParams.id) {
            setCurrentStep('1');
        } else {
            if(currentStep === '3') {
                setCurrentStep('2');
            } else {
                setCurrentStep('1');
            }
        }
    }

    const handleConfirm = () => {
        if(routeParams.id) {
            
        } else {
            
        }
    }
    
    return (
        <>
            <div className='page-title'>
                <h1>{pageTitle}</h1>
            </div>
            {currentStep === '1' && 
                <>
                    {routeParams.id && 
                        <div>
                            <div>Site:</div>
                            <div>{data.request.site_label}</div>
                        </div>
                    }
                    <Step1 data={data} setData={setData} updateUsername={updateUsername} handleSubmit={handleSubmit} buttonText={buttonText} />
                </>
            }
            {currentStep === '2' && 
                <Step2 sitesData={sitesData} setSitesData={setSitesData} handleSubmit={handleSubmit} goBack={goBack} />
            }
            {currentStep === '3' && 
                <Step3 data={data} sitesData={sitesData} handleConfirm={handleConfirm} goBack={goBack} />
            }
        </>
    );
}

export default RequestAddUser;