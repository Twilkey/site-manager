import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from "react-router-dom";
import { Message, toaster } from 'rsuite';

const Plugin = (props) => {
    const routeParams = useParams();
    const [pluginname, setPluginName] = useState('');
    const [data, setData] = useState([]);
    const fetchingComplete = useRef(false);

    useEffect(() => {
        const title = decodeURIComponent(routeParams.name);
        const getData = async () => {
            await fetch(`${process.env.REACT_APP_BACKEND_URL}?` + new URLSearchParams({
                enviornment: window.location.hostname,
                action: 'get_custom',
                table: 'sites, JSON_TABLE(plugins, "$[*]" COLUMNS(name VARCHAR(100) PATH "$.name")) as name',
                where: 'name=:name',
                params: `name:${title}`
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

        if(fetchingComplete.current === false){
            setPluginName(title);
            getData();
            
            fetchingComplete.current = true;
        }
    }, [routeParams.name, pluginname]);

    return (
        <>
            <div className='page-title'>
                <h1>{pluginname}</h1>
            </div>
            {data && 
                <div className='page-table page-table-sitelist'>
                    <div className='page-table-head'>
                        <div className='page-table-column page-table-label'>Site</div>
                        <div className='page-table-column page-table-label'>Status</div>
                        <div className='page-table-column page-table-label'>Version</div>
                        <div className='page-table-column page-table-label'>Update Available</div>
                        <div className='page-table-column page-table-label'>Frontend</div>
                        <div className='page-table-column page-table-label'>Backend</div>
                    </div>
                    {data.map((data, index) => {
                        let plugindata = JSON.parse(data.plugins).find(p => p.name === pluginname);

                        let updatetext = plugindata.update;
                        if(plugindata.new_version !== "-" && plugindata.update === "Yes") {
                            updatetext += "/"+plugindata.new_version;
                        }
                        return (
                            <div className='page-table-row-outter' key={index}>
                                <div className='page-table-row-inner'>
                                    <div className='page-table-column page-table-label'><Link to={`/site/${data.id}`}>{data.label}</Link></div>
                                    <div className='page-table-column'>{plugindata.status}</div>
                                    <div className='page-table-column'>{plugindata.version}</div>
                                    <div className='page-table-column'>{updatetext}</div>
                                    <div className='page-table-column'><a href={data.url} target="_blank" rel="noreferrer">Visit</a></div>
                                    <div className='page-table-column'><a href={data.adminurl} target="_blank" rel="noreferrer">Visit</a></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
        </>
    )
}

export default Plugin;