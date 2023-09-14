import { Link } from "react-router-dom";

const SiteTheme = (props) => {
    let data = props.theme;
    return (
        <div className='page-table'>
            <div className='page-table-head'>
                <div className='page-table-column page-table-label'>Theme Name</div>
                <div className='page-table-column page-table-label'>Description</div>
                <div className='page-table-column page-table-label'>Author</div>
                <div className='page-table-column page-table-label'>Version</div>
                <div className='page-table-column page-table-label'>Is Parent</div>
            </div>
            <div className='page-table-row-outter'>
                <div className='page-table-row-inner'>
                    <div className='page-table-column page-table-label'><Link to={`/site/theme/${encodeURIComponent(data.name)}`}>{data.name}</Link></div>
                    <div className='page-table-column'>{data.desc}</div>
                    <div className='page-table-column'>{data.author}</div>
                    <div className='page-table-column'>{data.version}</div>
                    <div className='page-table-column'>{data.isparent}</div>
                </div>
            </div>
        </div>
    )
}

export default SiteTheme;