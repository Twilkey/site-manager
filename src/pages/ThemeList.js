import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { Message, toaster } from 'rsuite';

const ThemeList = (props) => {
    const [data, setData] = useState([]);
    const fetchingComplete = useRef(false);

    useEffect(() => {
        if(fetchingComplete.current === false){
            const getData = async () => {
                let themeArr = [];
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
                        if(sites.theme){
                            let thisSiteTheme = JSON.parse(sites.theme);
                            if(themeArr.hasOwnProperty(thisSiteTheme.name)){
                                themeArr[thisSiteTheme.name][1]++;
                            } else {
                                themeArr[thisSiteTheme.name] = [thisSiteTheme.name, 1];
                            }
                        }
                    });
                    mergedArr['themes'] = themeArr;
                    setData(mergedArr);
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

    return (
        <>
            <div className='page-title'>
                <h1>Theme List</h1>
            </div>
            {data && data.themes && 
                <div className='page-table'>
                    <div className='page-table-head'>
                        <div className='page-table-column page-table-label'>Theme Name</div>
                        <div className='page-table-column page-table-label'>Count</div>
                    </div>
                    {Object.entries(data.themes).map((item, index) => (
                        <div className='page-table-row-outter' key={index}>
                            <div className='page-table-row-inner'>
                                <div className='page-table-column page-table-label'><Link to={`/site/theme/${encodeURIComponent(item[1][0])}`}>{item[1][0]}</Link></div>
                                <div className='page-table-column'>{item[1][1]}</div>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </>
    )
}

export default ThemeList;