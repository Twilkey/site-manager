import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import { Message, toaster, Popover, Whisper } from 'rsuite';

import getVertical from "../functions/getVertical";
import getDomainName from "../functions/getDomainName";

const SiteList = (props) => {
    const { domain } = useParams();
	const navigate = useNavigate();
	const [sitesdata, setSitesData] = useState(null);
    const [pageTitle, setPageTitle] = useState('Sites');
    const fetchingComplete = useRef(false);

	useEffect(() => {
        if(fetchingComplete.current === false) {
			const getSites = async () => {
				let searchParams = {
					enviornment: window.location.hostname,
					action: 'get_custom',
					fields: 'sites.*, domains.domain AS domain_name',
					table: 'sites LEFT JOIN domains on sites.domain = domains.id',
					orderby: 'domain_name',
					orderbydirec: 'ASC'
				};
		
				if(domain !== undefined) {
					searchParams = {
						...searchParams,
						where: 'sites.domain=:domain',
						params: `domain:${domain}`
					};
				}

				await fetch(`${process.env.REACT_APP_BACKEND_URL}?` + new URLSearchParams(searchParams))
				.then((response) => {
					return response.json();
				})
				.then((result) => {
					if(domain !== undefined) {
						getDomainName(domain).then((result) => {
							setPageTitle(`${result.domain} Sites`);
						});
					}
					if(result.length > 0) {
						if(result.errorInfo) {
							console.log(result.errorInfo);
							toaster.push(<Message showIcon type="error">{result.errorInfo}</Message>, { duration: 3000 });
						} else {
							setSitesData(result);
						}
					}
				},
				(error) => {
					console.log(error)
					toaster.push(<Message showIcon type="error">{error.message}</Message>, { duration: 3000 });
				});
			}

			getSites();
		}
	}, [domain]);

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
			toaster.push(<Message showIcon type="success">Successfully Deleted</Message>, { duration: 3000 });
			var newsitesdata = sitesdata.filter(function(site){ return site.id !== id });
			setSitesData(newsitesdata);
		}
	}
	
	return (
		<>
			<div className='page-title'>
                <h1>{pageTitle}</h1>
			</div>
			<div 
				className='page-add-button page-button' 
				onClick={(e) => {
					navigate(`/site/add`);
				}}
			>
				Add New Site
			</div>
			<div>
				{sitesdata && 
					<div className='page-table page-table-sitelist'>
						<div className='page-table-head'>
							<div className='page-table-column page-table-label'>Label</div>
							{domain === undefined && 
								<div className='page-table-column page-table-label'>Domain</div>
							}
							<div className='page-table-column page-table-label'>Vertical</div>
							<div className='page-table-column page-table-label'>Frontend</div>
							<div className='page-table-column page-table-label'>Backend</div>
							<div className='page-table-column page-table-label'></div>
						</div>
						{sitesdata.map((data, index) => {
							let vert = data.vertical ? getVertical(data.vertical) : 'N/A';

							return (
								<div className='page-table-row-outter' key={index}>
									<div className='page-table-row-inner'>
										<div className='page-table-column page-table-label'><Link to={`/site/${data.id}`}>{data.label}</Link></div>
										{domain === undefined && 
											<div className='page-table-column page-table-label'><Link to={`/site/list/${data.domain}`}>{data.domain_name}</Link></div>
										}
										<div className='page-table-column'>{vert}</div>
										<div className='page-table-column'><a href={data.url} target="_blank" rel="noreferrer">Visit</a></div>
										<div className='page-table-column'><a href={data.adminurl} target="_blank" rel="noreferrer">Visit</a></div>
										<div className='page-table-column'>
											<Whisper
												placement="left"
												trigger="hover"
												controlId={`control-id-${index}`}
												speaker={<Popover>
													<div className='popover-link' onClick={(e) => navigate(`/site/edit/${data.id}`)}>Edit</div>
													<div className='popover-link' onClick={(e) => confirmDeleteSite(data.id)}>Delete</div>
												</Popover>}
												enterable
											>
												<div className='page-table-more-button'>&middot;&middot;&middot;</div>
											</Whisper>
										</div>
									</div>
								</div>
							)
						})}
					</div>
				}
			</div>
		</>
	)
}

export default SiteList;