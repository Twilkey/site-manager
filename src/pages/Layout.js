import { Outlet } from "react-router-dom";

import SidebarMenu from "../components/SidebarMenu";

const Layout = (props) => {
    return (
        <div className="page">
            <SidebarMenu toggleDarkmode={props.toggleDarkmode} />
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;