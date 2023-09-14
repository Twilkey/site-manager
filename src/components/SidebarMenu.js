import React, { useState } from 'react';
import { Sidenav, Nav } from 'rsuite';
import { useLocation } from "react-router-dom";

import DarkmodeSwitch from "./DarkmodeSwitch";

import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';

const SidebarMenu = (props) => {
	const location = useLocation();
    const [activeKey, setActiveKey] = useState(location.pathname);

    const pathnameArray = location.pathname.split("/");
    let defaultOpenKey = pathnameArray[1];

    return (
        <div className="sidebar">
            <Sidenav expanded={true} defaultOpenKeys={[defaultOpenKey]}>
                <Sidenav.Body>
                    <Nav activeKey={activeKey} onSelect={setActiveKey}>
                        <Nav.Item eventKey="/dashboard" icon={<DashboardIcon />} href="/dashboard">Dashboard</Nav.Item>
                        <Nav.Menu eventKey="post" title="Posts" icon={<MagicIcon />}>
                            <Nav.Item eventKey="/post/list" href="/post/list">Post List</Nav.Item>
                            <Nav.Item eventKey="/post/add" href="/post/add">Add Post</Nav.Item>
                        </Nav.Menu>
                        <Nav.Menu eventKey="domain" title="Domains" icon={<MagicIcon />}>
                            <Nav.Item eventKey="/domain/list" href="/domain/list">All Domains</Nav.Item>
                            <Nav.Item eventKey="/domain/registrar/list" href="/domain/registrar/list">Registrars</Nav.Item>
                        </Nav.Menu>
                        <Nav.Menu eventKey="site" title="Sites" icon={<MagicIcon />}>
                            <Nav.Item eventKey="/site/list" href="/site/list">Site List</Nav.Item>
                            <Nav.Item eventKey="/site/theme/list" href="/site/theme/list">Theme List</Nav.Item>
                            <Nav.Item eventKey="/site/plugin/list" href="/site/plugin/list">Plugin List</Nav.Item>
                            <Nav.Item eventKey="/site/user/list" href="/site/user/list">User List</Nav.Item>
                        </Nav.Menu>
                        <Nav.Menu eventKey="user" title="Users" icon={<GroupIcon />}>
                            <Nav.Item eventKey="/user/list" href="/user/list">User List</Nav.Item>
                            <Nav.Item eventKey="/user/add" href="/user/add">Add User</Nav.Item>
                        </Nav.Menu>
                        <Nav.Menu eventKey="request" title="Request" icon={<GroupIcon />}>
                            <Nav.Item eventKey="/request/list" href="/request/list">Request List</Nav.Item>
                            <Nav.Item eventKey="/request/add/user" href="/request/add/user">Request User</Nav.Item>
                        </Nav.Menu>
                        <Nav.Menu eventKey="search" title="Search" icon={<GroupIcon />}>
                            <Nav.Item eventKey="/search/users" href="/search/users">Users</Nav.Item>
                        </Nav.Menu>
                        {/* <Nav.Item eventKey="/github/teams/CatenaUS" icon={<GroupIcon />} href="/github/teams/CatenaUS">Github Teams</Nav.Item> */}
                        <Nav.Menu eventKey="misc" title="Misc" icon={<MagicIcon />}>
                            <Nav.Item eventKey="/misc/non-company-users" href="/misc/non-company-users">Non-Company Users</Nav.Item>
                            <Nav.Item eventKey="/misc/scripts" href="/misc/scripts">Scripts</Nav.Item>
                        </Nav.Menu>
                    </Nav>
                    <DarkmodeSwitch label="Dark Mode" toggleDarkmode={props.toggleDarkmode} />
                </Sidenav.Body>
            </Sidenav>
        </div>
    );
};
  
export default SidebarMenu;