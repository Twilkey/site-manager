import { Link } from "react-router-dom";

const Misc = (props) => {
    return (
        <>
            <div className='page-title'>
                <h1>Miscellaneous Features</h1>
            </div>
            <div className='page-box'>
                <h6><Link to="/misc/non-company-users">View all non-company user accounts</Link></h6>
                <p>This will show a list of all user accounts accross all sites that do not have a company email attached to them.</p>
                <h6><Link to="/misc/scripts">Dashboard Associated Scripts</Link></h6>
                <p>This will show a list of the various scripts associated with this dashboard.</p>
            </div>
        </>
    );
}

export default Misc;