const checkSiteLabelExists = async (Message, toaster, label) => {
    return await fetch(`${process.env.REACT_APP_BACKEND_URL}?` + new URLSearchParams({
        enviornment: window.location.hostname,
        action: 'get_custom',
        fetchtype: 'single',
        fields: 'COUNT(*) as count',
        table: 'sites',
        where: '(label = :label)',
        params: `label:${label}`
    }))
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        return result['count'];
    },
    (error) => {
        console.log(error)
        toaster.push(<Message showIcon type="error">{error.message}</Message>, { duration: 3000 });
    });
}

export default checkSiteLabelExists;