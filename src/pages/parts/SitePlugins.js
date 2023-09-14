import { Link } from "react-router-dom";

const SitePlugins = (props) => {
    let data = props.plugins;
    return (
        <div className='page-table'>
            <div className='page-table-head'>
                <div className='page-table-column page-table-label page-table-name'>Plugin Name</div>
                <div className='page-table-column page-table-label page-table-author'>Author</div>
                <div className='page-table-column page-table-label page-table-status'>Status</div>
                <div className='page-table-column page-table-label page-table-version'>Version</div>
                <div className='page-table-column page-table-label page-table-update'>Update Available</div>
                <div className='page-table-column page-table-label page-table-new_version'>New Version</div>
            </div>
            {data.map((plugin, index) => (
                <div className='page-table-row-outter' key={index}>
                    <div className='page-table-row-inner'>
                        <div className='page-table-column page-table-name'><Link to={`/site/plugin/${encodeURIComponent(plugin.name)}`}>{plugin.name}</Link></div>
                        <div className='page-table-column page-table-author'>{plugin.author}</div>
                        <div className='page-table-column page-table-status'>{plugin.status}</div>
                        <div className='page-table-column page-table-version'>{plugin.version}</div>
                        <div className='page-table-column page-table-update'>{plugin.update}</div>
                        <div className='page-table-column page-table-new_version'>{plugin.new_version}</div>
                    </div>
                    <div className='page-table-row-inner'>
                        <div className='page-table-column page-table-desc'>{plugin.desc.replace( /(<([^>]+)>)/ig, '')}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SitePlugins;