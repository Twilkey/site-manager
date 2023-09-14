import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import { Message, toaster, Form, Input, Button } from 'rsuite';

import FormField from "../components/FormField";

const SearchUsers = (props) => {
    const formRef = useRef();
    const [usersitesdata, setUserSitesData] = useState(null);
    const [formError, setFormError] = useState({});

    const [data, setData] = useState({
        search: ""
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        await fetch(`${process.env.REACT_APP_BACKEND_URL}?` + new URLSearchParams({
            enviornment: window.location.hostname,
            action: 'get_custom',
            fields: 'sites.*, domains.domain AS domain_name',
            table: 'sites LEFT JOIN domains on sites.domain = domains.id, JSON_TABLE(sites.users, "$[*]" COLUMNS(user_email VARCHAR(100) PATH "$.user_email")) as user_email',
            where: 'user_email=:user_email',
            params: `user_email:${data.search}`
        }))
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            setUserSitesData(result);
        },
        (error) => {
            console.log(error)
            toaster.push(<Message showIcon type="error">{error.message}</Message>, { duration: 3000 });
        });
    }

    return (
        <>
            <div className='page-title'>
                <h1>Search Sites Users</h1>
            </div>
            <Form
                ref={formRef}
                onChange={setData}
                onCheck={setFormError}
                fluid
            >
                <div className='page-box'>
                    <div className='page-box-form-input'>
                        <FormField name="search" label="Search" accepter={Input} error={formError.search} />
                    </div>
                    <Form.Group>
                        <Button appearance="primary" onClick={handleSubmit}>Submit</Button>
                    </Form.Group>
                </div>
            </Form>
            {usersitesdata && 
                <div className='page-table'>
                    <div className='page-table-head'>
                        <div className='page-table-column page-table-label'>Site</div>
                        <div className='page-table-column page-table-label'>Domain</div>
                        <div className='page-table-column page-table-label'>Name</div>
                        <div className='page-table-column page-table-label'>Username</div>
                        <div className='page-table-column page-table-label'>Roles</div>
                        <div className='page-table-column page-table-label'>Frontend</div>
                        <div className='page-table-column page-table-label'>Backend</div>
                    </div>
                    {Object.entries(usersitesdata).map((site, index) => {
                        let siteData = site[1];
                        let userdata = JSON.parse(siteData.users).find(u => u.user_email === data.search);

                        return (
                            <div className='page-table-row-outter' key={index}>
                                <div className='page-table-row-inner'>
                                    <div className='page-table-column page-table-label'><Link to={`/site/${siteData.id}`}>{siteData.label}</Link></div>
                                    <div className='page-table-column page-table-label'><Link to={`/site/list/${siteData.domain}`}>{siteData.domain_name}</Link></div>
                                    <div className='page-table-column'>{userdata.display_name}</div>
                                    <div className='page-table-column'>{userdata.user_login}</div>
                                    <div className='page-table-column'>{userdata.roles.join(', ')}</div>
                                    <div className='page-table-column'><a href={data.url} target="_blank" rel="noreferrer">Visit</a></div>
                                    <div className='page-table-column'><a href={data.adminurl} target="_blank" rel="noreferrer">Visit</a></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
        </>
    )
}

export default SearchUsers;