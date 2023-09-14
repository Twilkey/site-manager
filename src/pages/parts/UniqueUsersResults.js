import { Link } from "react-router-dom";

const UniqueUsersResults = (props) => {
    const { data } = props;

    return (
        <>
            {data && 
                <div className='page-table'>
                    <div className='page-table-head'>
                        <div className='page-table-column page-table-label'>Name</div>
                        <div className='page-table-column page-table-label'>Username</div>
                        <div className='page-table-column page-table-label'>Email</div>
                    </div>
                    {data.map((user, index) => (
                        <div className='page-table-row-outter' key={index}>
                            <div className='page-table-row-inner'>
                                <div className='page-table-column'><Link to={`/site/user/${encodeURIComponent(user[1].user_email)}`}>{user[1].display_name}</Link></div>
                                <div className='page-table-column'>{user[1].user_login}</div>
                                <div className='page-table-column'>{user[1].user_email}</div>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </>
    )
}

export default UniqueUsersResults;