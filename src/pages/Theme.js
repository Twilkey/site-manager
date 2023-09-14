import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from "react-router-dom";
import { Message, toaster } from 'rsuite';

const Theme = (props) => {
    const routeParams = useParams();
    const [themename, setThemeName] = useState('');
    const [data, setData] = useState([]);
    const fetchingComplete = useRef(false);

    useEffect(() => {
        const title = decodeURIComponent(routeParams.name);
        const getData = async () => {
            await fetch(`${process.env.REACT_APP_BACKEND_URL}?` + new URLSearchParams({
                enviornment: window.location.hostname,
                action: 'get_custom',
                table: 'sites',
                where: 'JSON_EXTRACT(theme, "$.name") = :name',
                params: `name:${title}`
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
            setThemeName(title);
            getData();
            fetchingComplete.current = true;
        }
    }, [routeParams.name, themename]);

    return (
        <>
            <div className='page-title'>
                <h1>{themename}</h1>
            </div>
            {data && 
                <div className='page-table page-table-sitelist'>
                    <div className='page-table-head'>
                        <div className='page-table-column page-table-label'>Site</div>
                        <div className='page-table-column page-table-label'>Version</div>
                        <div className='page-table-column page-table-label'>Frontend</div>
                        <div className='page-table-column page-table-label'>Backend</div>
                    </div>
                    {data.map((item, index) => {
                        let themeData = JSON.parse(item.theme);

                        return (
                            <div className='page-table-row-outter' key={index}>
                                <div className='page-table-row-inner'>
                                    <div className='page-table-column page-table-label'><Link to={`/site/${item.id}`}>{item.label}</Link></div>
                                    <div className='page-table-column'>{themeData.version}</div>
                                    <div className='page-table-column'><a href={item.url} target="_blank" rel="noreferrer">Visit</a></div>
                                    <div className='page-table-column'><a href={item.adminurl} target="_blank" rel="noreferrer">Visit</a></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
        </>
    )
}

export default Theme;