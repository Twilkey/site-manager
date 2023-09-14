import React, { useState, useEffect, useRef } from 'react';
import Collapsible from 'react-collapsible';
import { Message, toaster } from 'rsuite';

const MiscNonCompanyUsers = (props) => {
    const [data, setData] = useState(null);
    const fetchingComplete = useRef(false);
    
    useEffect(() => {
        if(fetchingComplete.current === false){
            const getData = async () => {
                await fetch(`${process.env.REACT_APP_BACKEND_URL}?` + new URLSearchParams({
                    enviornment: window.location.hostname,
                    action: 'get_noncompany_accounts',
                    orderby: 'domain',
                    orderbydirec: 'ASC'
                }))
                .then((response) => {
                    return response.json();
                })
                .then((result) => {
                    let siteArr = [];

                    result.forEach(item => {
                        let userArr = [];
                        if(item.users){
                            JSON.parse(item.users).forEach(user => {
                                if(!user.user_email.includes("catenamedia.com")){
                                    userArr.push(user);
                                }
                            })
                        }

                        if(userArr.length > 0) {
                            siteArr.push({
                                id: item.id,
                                label: (item.label !== undefined ? item.label : item.url),
                                domain: item.domain_name,
                                url: item.url,
                                adminurl: item.adminurl,
                                users: userArr,
                            });
                        }
                    });
                    setData(siteArr);
                },
                (error) => {
                    console.log(error)
					toaster.push(<Message showIcon type="error">{error.message}</Message>, { duration: 3000 });
                });
            }

            getData();
            fetchingComplete.current = true;
        }
    });

    return (
        <>
            {data && data.map((site, index) => {
                let siteadmin = site.adminurl.replace(/\/$/, '');
                let isOpen = false;
                if(index === 0) {
                    isOpen = true;
                }
                return (
                    <Collapsible trigger={site.label} key={index} open={isOpen}>
                        <div className='page-table'>
                            <div className='page-table-head'>
                                <div className='page-table-column page-table-label'>Name</div>
                                <div className='page-table-column page-table-label'>Username</div>
                                <div className='page-table-column page-table-label'>Email</div>
                            </div>
                            {site.users.map((user, index) => (
                                <div className='page-table-row-outter' key={index}>
                                    <div className='page-table-row-inner'>
                                        <div className='page-table-column'><a href={`${siteadmin}/user-edit.php?user_id=${encodeURIComponent(user.user_id)}`} target="_blank" rel="noreferrer">{user.display_name}</a></div>
                                        <div className='page-table-column'>{user.user_login}</div>
                                        <div className='page-table-column'>{user.user_email}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Collapsible>
                )
            })}
        </>
    )
}

export default MiscNonCompanyUsers;