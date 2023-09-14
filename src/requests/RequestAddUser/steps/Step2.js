import React, { useState, useEffect, useRef } from 'react';
import { Form, ButtonToolbar, Button, CheckboxGroup, Checkbox, Schema, Panel, PanelGroup, Message, toaster } from 'rsuite';

import getEnvironment from "../../../functions/getEnvironment";
import getVertical from "../../../functions/getVertical";
import getSites from "../../../functions/getSites";

import FormField from "../../../components/FormField";

const { ArrayType } = Schema.Types;
const model = Schema.Model({
    sites: ArrayType()
      .minLength(1, 'Please select at least 1 site.')
      .isRequired('This field is required.'),
});
const Step2 = (props) => {
    const { sitesData } = props;
    const fetchingComplete = useRef(false);
    const formRef = useRef();
    const [formError, setFormError] = useState({});
    const [data, setData] = useState([]);
    
    useEffect(() => {
        if(fetchingComplete.current === false) {
            getSites(Message, toaster).then((response) => {
                let verticalObject = {};
                response.forEach((data) => {
                    if (!verticalObject[data.vertical]) {
                        verticalObject[data.vertical] = {};
                    }
                    if (!verticalObject[data.vertical][data.domain_name]) {
                        verticalObject[data.vertical][data.domain_name] = {};
                    }
                    verticalObject[data.vertical][data.domain_name][data.environment] = data.id;
                });

                const verticalArray = Object.entries(verticalObject).map(([verticalKey, verticalValue]) => {
                    const domainsArray = Object.entries(verticalValue).map(([domainKey, domainValue]) => {
                        const environmentsArray = Object.entries(domainValue).map(([environmentKey, environmentValue]) => {
                        return environmentValue;
                        });
                        return { domain: domainKey, environments: environmentsArray };
                    });
                    return { vertical: verticalKey, domains: domainsArray };
                });
                setData(verticalArray);
            });

            fetchingComplete.current = true;
        }
    }, [data]);

    return (
        <>
            <Form
                ref={formRef}
                onChange={props.setSitesData}
                onCheck={setFormError}
                formValue={sitesData}
                model={model}
                fluid
            >
                <div className='page-box'>
                    {data && 
                        <FormField 
                            name="sites" 
                            accepter={CheckboxGroup} 
                            error={formError.sites} 
                        >
                            <></>
                            <PanelGroup accordion defaultActiveKey={0} bordered>
                                {data.map((item, index) => (
                                    <Panel key={index} header={getVertical(item.vertical)} eventKey={index} id={`panel${index}`}>
                                        {item.domains.map((domain, index) => (
                                            <div className="flexwrap-3col" key={index}>
                                                <h4>{domain.domain}</h4>
                                                {Object.entries(domain.environments).map(([environment, site], index) => (
                                                    <div key={index}>
                                                        <Checkbox value={site}>{getEnvironment(environment)}</Checkbox>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </Panel>
                                ))}
                            </PanelGroup>
                        </FormField>
                    }
                </div>
                <Form.Group>
                    <ButtonToolbar>
                        <Button appearance="primary" onClick={() => props.handleSubmit(formRef)}>Continue</Button>
                        <Button appearance="default" onClick={props.goBack}>Back</Button>
                    </ButtonToolbar>
                </Form.Group>
            </Form>
        </>
    );
}

export default Step2;