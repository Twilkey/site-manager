import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import { Triangle } from  'react-loader-spinner';
import Popup from 'reactjs-popup';
import { confirmAlert } from 'react-confirm-alert';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Message, toaster } from 'rsuite';

import SiteUserTab from "./parts/SiteUserTab";
import SiteTheme from "./parts/SiteTheme";
import SitePlugins from "./parts/SitePlugins";
import SiteNotes from "./parts/SiteNotes";

import getVertical from "../functions/getVertical";

const Site = (props) => {
    const routeParams = useParams();
	const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const fetchingComplete = useRef(false);

    useEffect(() => {
        if(fetchingComplete.current === false){
			const getData = async () => {
				let searchParams = {
					enviornment: window.location.hostname,
					action: 'get_custom',
                    fetchtype: 'single',
					fields: 'sites.*, domains.domain AS domain_name',
					table: 'sites LEFT JOIN domains on sites.domain = domains.id',
                    where: 'sites.id=:id',
                    params: `id:${routeParams.id}`
				};
		
				await fetch(`${process.env.REACT_APP_BACKEND_URL}?` + new URLSearchParams(searchParams))
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

            getData();
            fetchingComplete.current = true;
        }
    });

    const updateSiteData = async (type) => {
        setIsLoading(true);
        await fetch(`${process.env.REACT_APP_BACKEND_URL}?` + new URLSearchParams({
            enviornment: window.location.hostname,
            action: `update_${type}`,
            id: routeParams.id
        }))
        .then((result) => {
            return result.json();
        })
        .then((result) => {
            setIsLoading(false);
			toaster.push(<Message showIcon type="success">{data.label} {type} data was successfully updated</Message>, { duration: 3000 });
            return null;
        },
        (error) => {
            console.log(error)
            toaster.push(<Message showIcon type="error">{error.message}</Message>, { duration: 3000 });
        })
    }

    const confirmDeleteSite = (id) => {
        confirmAlert({
            title: "Confirm to delete",
            message: "Are you sure to delete this.",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => deleteSite(id)
                },
                {
                    label: "No"
                }
            ]
        });
    };

	const deleteSite = async (id) => {
        try {
			await fetch(`${process.env.REACT_APP_BACKEND_URL}?` + new URLSearchParams({
                enviornment: window.location.hostname,
				action: 'delete_site',
				id: id
			}));
		} catch (error) {
			console.log(error);
            toaster.push(<Message showIcon type="error">{error.message}</Message>, { duration: 3000 });
		} finally {
			navigate('/site/list');
		}
	}

    return (
        <>
            {data && 
                <>
                    <div className='page-title site-page-title'>
                        <div className='site-page-title-left'>
                            <h1>{data.label}</h1>
                            {data.vertical && 
                                <div className='site-page-meta'>Vertical: {getVertical(data.vertical)}</div>
                            }
                        </div>
                        <Popup
                            trigger={<button className="button">Force Updates</button>}
                            modal
                        >
                            {close => (
                                <div className='site-force-update'>
                                    <div className="modal">
                                        <button className="close" onClick={close}>&times;</button>
                                        <div className="header">Force Updates</div>
                                        <div className="content">
                                            {isLoading &&  (
                                                <Triangle
                                                    height="100"
                                                    width="100"
                                                    color="#4caf50"
                                                    ariaLabel="triangle-loading"
                                                    visible={true}
                                                />
                                            )}
                                        </div>
                                        <div className="actions">
                                            <button
                                                className="button"
                                                onClick={(e) => updateSiteData('theme', routeParams.id)}
                                            >
                                                Update Theme
                                            </button>
                                            <button
                                                className="button"
                                                onClick={(e) => updateSiteData('plugins', routeParams.id)}
                                            >
                                                Update Plugins
                                            </button>
                                            <button
                                                className="button"
                                                onClick={(e) => updateSiteData('users', routeParams.id)}
                                            >
                                                Update Users
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Popup>
                        <div className='flex-columns'>
                            <div className='green-button' onClick={(e) => navigate(`/site/edit/${data.id}`)}>Edit</div>
                            <div className='red-button' onClick={(e) => confirmDeleteSite(data.id)}>Delete</div>
                        </div>
                    </div>
                    <div className='page-table page-table-siteurls'>
                        <div className='page-table-head'>
                            <div className='page-table-column page-table-label'>Site URLs</div>
                        </div>
                        {data.domain_name && 
                            <div className='page-table-row-outter'>
                                <div className='page-table-row-inner'>
                                    <div className='page-table-column page-table-label'>Domain</div>
                                    <div className='page-table-column'>{data.domain_name}</div>
                                </div>
                            </div>
                        }
                        {data.url && 
                            <div className='page-table-row-outter'>
                                <div className='page-table-row-inner'>
                                    <div className='page-table-column page-table-label'>Frontend URL</div>
                                    <div className='page-table-column'><a href={data.url} target="_blank" rel="noreferrer">{data.url}</a></div>
                                </div>
                            </div>
                        }
                        {data.adminurl && 
                            <div className='page-table-row-outter'>
                                <div className='page-table-row-inner'>
                                    <div className='page-table-column page-table-label'>Admin URL</div>
                                    <div className='page-table-column'><a href={data.adminurl} target="_blank" rel="noreferrer">{data.adminurl}</a></div>
                                </div>
                            </div>
                        }
                        {data.githubowner && data.githubrepo && 
                            <div className='page-table-row-outter'>
                                <div className='page-table-row-inner'>
                                    <div className='page-table-column page-table-label'>Github URL</div>
                                    <div className='page-table-column'><a href={`https://github.com/${data.githubowner}/${data.githubrepo}`} target="_blank" rel="noreferrer">https://github.com/{data.githubowner}/{data.githubrepo}</a></div>
                                </div>
                        </div>
                        }
                    </div>
                    <Tabs>
                        <TabList>
                            {data.users !== null && <Tab>Users</Tab>}
                            {data.theme !== null && <Tab>Theme</Tab>}
                            {data.plugins !== null && <Tab>Plugins</Tab>}
                            {data.notes && <Tab>Notes</Tab>}
                        </TabList>
                        {data.users !== null && 
                            <TabPanel>
                                    <SiteUserTab siteusers={JSON.parse(data.users)} />
                            </TabPanel>
                        }
                        {data.theme !== null && 
                            <TabPanel>
                                    <SiteTheme theme={JSON.parse(data.theme)} />
                            </TabPanel>
                        }
                        {data.plugins !== null && 
                            <TabPanel>
                                    <SitePlugins plugins={JSON.parse(data.plugins)} />
                            </TabPanel>
                        }
                        {data.notes &&
                            <TabPanel>
                                <SiteNotes notes={data.notes} />
                            </TabPanel>
                        }
                    </Tabs>
                </>
            }
        </>
    )
}

export default Site;