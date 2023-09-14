const getSite = async (id, Message, toaster) => {
    return await fetch(`${process.env.REACT_APP_BACKEND_URL}?` + new URLSearchParams({
        enviornment: window.location.hostname,
        action: 'get_custom',
        fetchtype: 'single',
        table: 'sites',
        where: 'id=:id',
        params: `id:${id}`
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

export default getSite;