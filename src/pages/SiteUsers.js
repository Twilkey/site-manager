import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from "react-router-dom";
import { Message, toaster } from 'rsuite';

const SiteUsers = (props) => {
    const routeParams = useParams();
    const [useremail, setUserEmail] = useState('');
    const [data, setData] = useState([]);
    const fetchingComplete = useRef(false);

    useEffect(() => {
        const email = decodeURIComponent(routeParams.email);
        const getData = async () => {
            await fetch(`${process.env.REACT_APP_BACKEND_URL}?` + new URLSearchParams({
                enviornment: window.location.hostname,
                action: 'get_custom',
                fields: 'sites.*, domains.domain AS domain_name',
                table: 'sites LEFT JOIN domains on sites.domain = domains.id, JSON_TABLE(sites.users, "$[*]" COLUMNS(user_email VARCHAR(100) PATH "$.user_email")) as user_email',
                where: 'user_email=:user_email',
                params: `user_email:${email}`
            }))
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                setData(result);
            },
            (error) => {
                console.log(error)
                toaster.push(<Message showIcon type="error">{error.message}</Message>, { duration: 3000 });
            });
        }

        if(fetchingComplete.current === false){
            setUserEmail(email);
            getData();
            fetchingComplete.current = true;
        }
    }, [routeParams.email]);

    return (
        <>
            <div className='page-title'>
                <h1>{useremail}</h1>
            </div>
            {data && 
                <div className='page-table'>
                    <div className='page-table-head'>
                        <div className='page-table-column page-table-label'>Site</div>
                        <div className='page-table-column page-table-label'>Name</div>
                        <div className='page-table-column page-table-label'>Username</div>
                        <div className='page-table-column page-table-label'>Roles</div>
                        <div className='page-table-column page-table-label'>Frontend</div>
                        <div className='page-table-column page-table-label'>Backend</div>
                    </div>
                    {Object.entries(data).map((item, index) => {
                        let itemData = item[1];
                        let userdata = JSON.parse(itemData.users).find(u => u.user_email === useremail);

                        return (
                            <div className='page-table-row-outter' key={index}>
                                <div className='page-table-row-inner'>
                                    <div className='page-table-column page-table-label'><Link to={`/site/${itemData.id}`}>{itemData.label}</Link></div>
                                    <div className='page-table-column'>{userdata.display_name}</div>
                                    <div className='page-table-column'>{userdata.user_login}</div>
                                    <div className='page-table-column'>{userdata.roles.join(', ')}</div>
                                    <div className='page-table-column'><a href={itemData.url} target="_blank" rel="noreferrer">Visit</a></div>
                                    <div className='page-table-column'><a href={itemData.adminurl} target="_blank" rel="noreferrer">Visit</a></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
        </>
    )
}

export default SiteUsers;