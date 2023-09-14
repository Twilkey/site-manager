import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import { Message, toaster, Popover, Whisper } from 'rsuite';

const UserList = (props) => {
	const navigate = useNavigate();
    const [data, setData] = useState(null);
    const fetchingComplete = useRef(false);

    useEffect(() => {
        if(fetchingComplete.current === false) {
            const getData = async () => {
                try {
                    await fetch(`${process.env.REACT_APP_BACKEND_URL}?` + new URLSearchParams({
                        enviornment: window.location.hostname,
                        action: 'get_custom',
                        table: 'users',
                        orderby: 'firstname',
                        orderbydirec: 'ASC'
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
                } catch (error) {
                    console.log(error)
                    toaster.push(<Message showIcon type="error">{error.message}</Message>, { duration: 3000 });
                }
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
				table: 'users',
				where: 'id=:id',
                params: `id:${id}`
			}));
		} catch (error) {
			console.log(error);
            toaster.push(<Message showIcon type="error">{error.message}</Message>, { duration: 3000 });
		} finally {
			navigate('/user/list');
		}
	}

    return (
        <>
            <div className='page-title site-page-title'>
                <div className='site-page-title-left'>
                    <h1>Dashboard User List</h1>
                </div>
            </div>
            {data && Array.isArray(data) && 
                <div className='page-table'>
                    <div className='page-table-head'>
                        <div className='page-table-column page-table-label'>Name</div>
                        <div className='page-table-column page-table-label'>Email</div>
                        <div className='page-table-column page-table-label'>Role</div>
                        <div className='page-table-column page-table-label'></div>
                    </div>
                    {data.map((item, index) => (
                        <div className='page-table-row-outter' key={index}>
                            <div className='page-table-row-inner'>
                                <div className='page-table-column'>{item.firstname} {item.lastname}</div>
                                <div className='page-table-column'>{item.email}</div>
                                <div className='page-table-column'>{item.role}</div>
                                <div className='page-table-column'>
                                    <Whisper
                                        placement="left"
                                        trigger="hover"
                                        controlId={`control-id-${index}`}
                                        speaker={<Popover>
                                            <div className='popover-link' onClick={(e) => navigate(`/user/edit/${item.id}`)}>Edit</div>
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
        </>
    )
}

export default UserList;