import { Link } from "react-router-dom";

const SiteUserTab = (props) => {
    return (
        <div className='page-table'>
            <div className='page-table-head'>
                <div className='page-table-column page-table-label'>Name</div>
                <div className='page-table-column page-table-label'>Username</div>
                <div className='page-table-column page-table-label'>Email</div>
                <div className='page-table-column page-table-label'>Roles</div>
            </div>
            {props.siteusers.map((user, index) => (
                <div className='page-table-row-outter' key={index}>
                    <div className='page-table-row-inner'>
                        <div className='page-table-column'><Link to={`/site/user/${encodeURIComponent(user.user_email)}`}>{user.display_name}</Link></div>
                        <div className='page-table-column'>{user.user_login}</div>
                        <div className='page-table-column'>{user.user_email}</div>
                        <div className='page-table-column'>{user.roles.join(', ')}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SiteUserTab;