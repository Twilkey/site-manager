const Scripts = (props) => {
    return (
        <>
            <div className='page-title'>
                <h1>Catena Site Manager</h1>
            </div>
            <div className='page-box'>
                <h2>Catena Site Manager Child Wordpress Plugin</h2>
                <p>This plugin is used to add a JSON API to each site that supplies various data about the site.</p>
                <p>Some data supplied in the API is the active theme and any installed plugin.</p>
                <p>Plans for the future are to use this plugin for anything DevOps related.</p>
                <p>Go <a href='https://github.com/CatenaUS/catena-site-manager-child' target="_blank" rel="noreferrer">here</a> to view the Github repository.</p>
            </div>
            <div className='page-box'>
                <h2>Catena Site Manager Frontend</h2>
                <p>Go <a href='https://github.com/CatenaUS/catena-site-manager' target="_blank" rel="noreferrer">here</a> to view the Github repository.</p>
            </div>
            <div className='page-box'>
                <h2>Catena Site Manager Backend</h2>
                <p>Go <a href='https://github.com/CatenaUS/catena-site-manager-backend' target="_blank" rel="noreferrer">here</a> to view the Github repository.</p>
            </div>
        </>
    );
}

export default Scripts;