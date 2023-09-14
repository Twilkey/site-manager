import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import { Message, toaster, Popover, Whisper } from 'rsuite';

const PostList = (props) => {
	const navigate = useNavigate();
	const [data, setData] = useState(null);
    const fetchingComplete = useRef(false);

	useEffect(() => {
        if(fetchingComplete.current === false) {
			const getData = async () => {
				await fetch(`${process.env.REACT_APP_BACKEND_URL}?` + new URLSearchParams({
					enviornment: window.location.hostname,
					action: 'get_custom',
					table: 'posts',
					orderby: 'id',
					orderbydirec: 'DESC'
				}))
				.then((response) => {
					return response.json();
				})
				.then((result) => {
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
	}, []);

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
				table: 'posts',
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
				<h1>Posts</h1>
			</div>
			<div>
				{data && 
					<div className='page-table page-table-sitelist'>
						<div className='page-table-head'>
							<div className='page-table-column page-table-label'>Title</div>
							<div className='page-table-column page-table-label'>Published</div>
							<div className='page-table-column page-table-label'></div>
						</div>
						{data.map((item, index) => (
							<div className='page-table-row-outter' key={index}>
								<div className='page-table-row-inner'>
									<div className='page-table-column page-table-label'><Link to={`/post/${item.id}`}>{item.title}</Link></div>
									<div className='page-table-column'>{item.datelogged}</div>
									<div className='page-table-column'>
										<Whisper
											placement="left"
											trigger="hover"
											controlId={`control-id-${index}`}
											speaker={<Popover>
												<div className='popover-link' onClick={(e) => navigate(`/post/edit/${item.id}`)}>Edit</div>
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

export default PostList;