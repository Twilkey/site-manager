const getSites = async (Message, toaster) => {
    return await fetch(`${process.env.REACT_APP_BACKEND_URL}?` + new URLSearchParams({
        enviornment: window.location.hostname,
        action: 'get_custom',
        fields: 'sites.*, domains.domain AS domain_name',
        table: 'sites LEFT JOIN domains on sites.domain = domains.id',
    }))
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        return result;
    },
    (error) => {
        console.log(error)
        toaster.push(<Message showIcon type="error">{error.message}</Message>, { duration: 3000 });
    });
}

export default getSites;