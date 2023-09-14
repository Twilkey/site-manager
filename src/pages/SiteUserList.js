import React, { useState, useEffect, useRef } from 'react';
import { Message, toaster } from 'rsuite';

import getUniqueUsers from "../functions/getUniqueUsers";

import SearchField from "../components/SearchField";

import UniqueUsersResults from "./parts/UniqueUsersResults";
import SearchUsersResults from "./parts/SearchUsersResults";

const SiteUserList = (props) => {
    const [data, setData] = useState([]);
    const [searchField, setSearchField] = useState();
    const [searchData, setSearchData] = useState([]);
    const [didSearch, setDidSearch] = useState(false);
    const fetchingComplete = useRef(false);

    const sortFunction = (a, b) => {
        if(a[1].display_name.toLowerCase() < b[1].display_name.toLowerCase()) { return -1; }
        if(a[1].display_name.toLowerCase() > b[1].display_name.toLowerCase()) { return 1; }
        return 0;
    }

    const getData = async () => {
        let fetchedData = await getUniqueUsers(Message, toaster);
        setData(fetchedData);

        let emailArray = Object.entries(fetchedData).sort(sortFunction).map((item) => item[1].user_email);
        setSearchData(emailArray);
    }

    useEffect(() => {
        if(fetchingComplete.current === false){
            getData();
            fetchingComplete.current = true;
        }
    });

    const handleChange = (value) => {
        setSearchField(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(searchField.length === 0) {
            getData();
        } else {
            await fetch(`${process.env.REACT_APP_BACKEND_URL}?` + new URLSearchParams({
                enviornment: window.location.hostname,
                action: 'get_custom',
                fields: 'sites.*, domains.domain AS domain_name',
                table: 'sites LEFT JOIN domains on sites.domain = domains.id, JSON_TABLE(sites.users, "$[*]" COLUMNS(user_email VARCHAR(100) PATH "$.user_email")) as user_email',
                where: 'user_email=:user_email',
                params: `user_email:${searchField}`
            }))
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                setData(result);
                setDidSearch(true);
            },
            (error) => {
                console.log(error)
                toaster.push(<Message showIcon type="error">{error.message}</Message>, { duration: 3000 });
            });
        }
    }

    return (
        <>
            <div className='page-title'>
                <h1>User List</h1>
            </div>
            <SearchField data={searchData} handleChange={handleChange} handleSubmit={handleSubmit} />
            {didSearch === false && 
                <UniqueUsersResults data={Object.entries(data).sort(sortFunction)} />
            }
            {didSearch === true && 
                <SearchUsersResults data={data} searchField={searchField} />
            }
        </>
    )
}

export default SiteUserList;