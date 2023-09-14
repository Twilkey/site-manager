import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import parse from 'html-react-parser';
import { Message, toaster } from 'rsuite';

const Post = (props) => {
    const routeParams = useParams();
	const navigate = useNavigate();
    const [data, setData] = useState(null);
    const fetchingComplete = useRef(false);

    useEffect(() => {
        if(fetchingComplete.current === false && (Object.keys(routeParams).length !== 0 && routeParams.constructor === Object)) {
            const getData = async () => {
                try {
                    await fetch(`${process.env.REACT_APP_BACKEND_URL}?` + new URLSearchParams({
                        enviornment: window.location.hostname,
                        action: 'get_custom',
                        fetchtype: 'single',
                        table: 'posts',
                        where: 'id=:id',
                        params: `id:${routeParams.id}`
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
    }, [routeParams]);

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
			navigate('/post/list');
		}
	}

    return (
        <>
            <div className='page-title site-page-title'>
                <div className='site-page-title-left'>
                    <h1>{data && data.title}</h1>
                    {data && 
                        <div className='site-page-meta'>Published: {data.datelogged}</div>
                    }
                </div>
                {data && 
                    <div className='flex-columns'>
                        <div className='green-button' onClick={(e) => navigate(`/post/edit/${data.id}`)}>Edit</div>
                        <div className='red-button' onClick={(e) => confirmDeleteData(data.id)}>Delete</div>
                    </div>
                }
            </div>
            {data && data.content && 
                <div className='page-box'>{parse(data.content)}</div>
            }
        </>
    )
}

export default Post;