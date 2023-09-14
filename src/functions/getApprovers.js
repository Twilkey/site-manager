const getApprovers = async (Message, toaster) => {
    return await fetch(`${process.env.REACT_APP_BACKEND_URL}?` + new URLSearchParams({
        enviornment: window.location.hostname,
        action: 'get_custom',
        table: 'users',
        where: "JSON_SEARCH(roles, 'one', 'Manager', NULL, '$[*]') IS NOT NULL",
        orderby: 'firstname',
        orderbydirec: 'ASC'
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

export default getApprovers;