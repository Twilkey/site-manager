import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Message, toaster } from 'rsuite';
import parse from 'html-react-parser'

const Dashboard = (props) => {
	const [data, setData] = useState(null);

	useEffect(() => {
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
                setData(result);
            },
            (error) => {
                console.log(error)
                toaster.push(<Message showIcon type="error">{error.message}</Message>, { duration: 3000 });
            });
        }

		getData();
	}, []);

    return (
        <>
            <div className='page-title'>
                <h1>Catena Site Manager</h1>
            </div>
            {data && data.map((item, index) => (
                <div className='page-box' key={index}>
                    <h6><Link to={`/post/${item.id}`}>{item.title}</Link></h6>
                    <div className='page-box-meta'>Published: {item.datelogged}</div>
                    <div>{parse(item.content)}</div>
                </div>
            ))}
        </>
    );
}

export default Dashboard;