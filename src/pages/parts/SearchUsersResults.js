import { Link } from "react-router-dom";

const SearchUsersResults = (props) => {
    const { data, searchField } = props;
    return (
        <>
            {data && 
                <div className='page-table'>
                    <div className='page-table-head'>
                        <div className='page-table-column page-table-label'>Site</div>
                        <div className='page-table-column page-table-label'>Domain</div>
                        <div className='page-table-column page-table-label'>Name</div>
                        <div className='page-table-column page-table-label'>Username</div>
                        <div className='page-table-column page-table-label'>Roles</div>
                        <div className='page-table-column page-table-label'>Frontend</div>
                        <div className='page-table-column page-table-label'>Backend</div>
                    </div>
                    {data.map((site, index) => {
                        let userdata = JSON.parse(site.users).find(u => u.user_email === searchField);

                        return (
                            <div className='page-table-row-outter' key={index}>
                                <div className='page-table-row-inner'>
                                    <div className='page-table-column page-table-label'><Link to={`/site/${site.id}`}>{site.label}</Link></div>
                                    <div className='page-table-column page-table-label'><Link to={`/site/list/${site.domain}`}>{site.domain_name}</Link></div>
                                    <div className='page-table-column'>{userdata.display_name}</div>
                                    <div className='page-table-column'>{userdata.user_login}</div>
                                    <div className='page-table-column'>{userdata.roles.join(', ')}</div>
                                    <div className='page-table-column'><a href={site.url} target="_blank" rel="noreferrer">Visit</a></div>
                                    <div className='page-table-column'><a href={site.adminurl} target="_blank" rel="noreferrer">Visit</a></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
        </>
    )
}

export default SearchUsersResults;