import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import { Message, toaster, Popover, Whisper } from 'rsuite';

const DomainList = (props) => {
    const { registrar } = useParams();
	const navigate = useNavigate();
    const [pageTitle, setPageTitle] = useState('Domains');
	const [data, setData] = useState(null);
    const fetchingComplete = useRef(false);

	useEffect(() => {
        if(fetchingComplete.current === false) {
			const getData = async () => {
				let searchParams = {
					enviornment: window.location.hostname,
					action: 'get_custom',
					fields: 'domains.*, registrars.name AS registrar_name',
					table: 'domains LEFT JOIN registrars on domains.registrar = registrars.id',
					orderby: 'id',
					orderbydirec: 'DESC'
				};

				if(registrar !== undefined) {
					searchParams = {
						...searchParams,
						where: 'registrar=:registrar',
						params: `registrar:${registrar}`
					};
				}

				await fetch(`${process.env.REACT_APP_BACKEND_URL}?` + new URLSearchParams(searchParams))
				.then((response) => {
					return response.json();
				})
				.then((result) => {
					if(registrar !== undefined) {
						setPageTitle(`${result[0].registrar_name} Domains`);
					}
					setData([...result]);
				},
				(error) => {
					console.log(error)
					toaster.push(<Message showIcon type="error">{error.message}</Message>, { duration: 3000 });
				});
			}

			getData();
			fetchingComplete.current = true;
		}
	}, [registrar]);

    const confirmDeleteData = (id) => {
        confirmAlert({
            title: "Confirm to delete",
            message: "Are you sure to delete this.",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => deleteData(id)
                },
                {
                    label: "No"
                }
            ]
        });
    };

	const deleteData = async (id) => {
		try {
			await fetch(`${process.env.REACT_APP_BACKEND_URL}?` + new URLSearchParams({
				enviornment: window.location.hostname,
				action: 'get_custom',
				table: 'domains',
				where: 'id=:id',
                params: `id:${id}`
			}));
		} catch (error) {
			console.log(error);
			toaster.push(<Message showIcon type="error">{error.message}</Message>, { duration: 3000 });
		} finally {
			toaster.push(<Message showIcon type="success">Successfully Deleted</Message>, { duration: 3000 });
			var newdata = data.filter(function(item){ return item.id !== id });
			setData(newdata);
		}
	}

	return (
		<>
			<div className='page-title'>
				<h1>{pageTitle}</h1>
			</div>
			<div>
				<div 
					className='page-add-button page-button' 
					onClick={(e) => {
						navigate(`/domain/add`);
					}}
				>
					Add New Domain
				</div>
				{data && 
					<div className='page-table page-table-sitelist'>
						<div className='page-table-head'>
							<div className='page-table-column page-table-label'>Name</div>
							<div className='page-table-column page-table-label'>Registrar</div>
							<div className='page-table-column page-table-label'></div>
						</div>
						{data.map((item, index) => (
							<div className='page-table-row-outter' key={index}>
								<div className='page-table-row-inner'>
									<div className='page-table-column page-table-label'><Link to={`/site/list/${item.id}`}>{item.domain}</Link></div>
									<div className='page-table-column page-table-label'><Link to={`/domain/list/${item.registrar}`}>{item.registrar_name}</Link></div>
									<div className='page-table-column'>
										<Whisper
											placement="left"
											trigger="hover"
											controlId={`control-id-${index}`}
											speaker={<Popover>
												<div className='popover-link' onClick={(e) => navigate(`/domain/edit/${item.id}`)}>Edit</div>
												<div className='popover-link' onClick={(e) => confirmDeleteData(item.id)}>Delete</div>
										  	</Popover>}
											enterable
										>
											<div className='page-table-more-button'>&middot;&middot;&middot;</div>
										</Whisper>
									</div>
								</div>
							</div>
						))}
					</div>
				}
			</div>
		</>
	)
}

export default DomainList;