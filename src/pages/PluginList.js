import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { Message, toaster } from 'rsuite';

const PluginList = (props) => {
    const [data, setData] = useState([]);
    const fetchingComplete = useRef(false);

    useEffect(() => {
        if(fetchingComplete.current === false){
            const getSites = async () => {
                let pluginArr = [];
                let mergedArr = [];

                await fetch(`${process.env.REACT_APP_BACKEND_URL}?` + new URLSearchParams({
                    enviornment: window.location.hostname,
                    action: 'get_sites',
                    orderby: 'domain',
                    orderbydirec: 'ASC'
                }))
                .then((response) => {
                    return response.json();
                })
                .then((result) => {
                    result.forEach(sites => {
                        if(sites.plugins !== null){
                            JSON.parse(sites.plugins).forEach(plugin => {
                                if(plugin.name){
                                    if(pluginArr.hasOwnProperty(plugin.name)){
                                        pluginArr[plugin.name][1]++;
                                    } else {
                                        pluginArr[plugin.name] = [plugin.name, 1];
                                    }
                                }
                            })
                        }
                    });
                    mergedArr['plugins'] = pluginArr;
                    setData(mergedArr);
                },
                (error) => {
                    console.log(error)
                    toaster.push(<Message showIcon type="error">{error.message}</Message>, { duration: 3000 });
                });
            }

            getSites();
            fetchingComplete.current = true;
        }
    });

    return (
        <>
            <div className='page-title'>
                <h1>Plugin List</h1>
            </div>
            {data && data.plugins && 
                <div className='page-table'>
                    <div className='page-table-head'>
                        <div className='page-table-column page-table-label'>Plugin Name</div>
                        <div className='page-table-column page-table-label'>Count</div>
                    </div>
                    {Object.entries(data.plugins).map((plugin, index) => (
                        <div className='page-table-row-outter' key={index}>
                            <div className='page-table-row-inner'>
                                <div className='page-table-column page-table-label'><Link to={`/site/plugin/${encodeURIComponent(plugin[1][0])}`}>{plugin[1][0]}</Link></div>
                                <div className='page-table-column'>{plugin[1][1]}</div>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </>
    )
}

export default PluginList;