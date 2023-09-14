const isApprover = async (Message, toaster, email) => {
    return await fetch(`${process.env.REACT_APP_BACKEND_URL}?` + new URLSearchParams({
        enviornment: window.location.hostname,
        action: 'get_custom',
        fetchtype: 'single',
        fields: 'COUNT(*) as count',
        table: 'users',
        where: "email=:email AND JSON_SEARCH(roles, 'one', 'Manager', NULL, '$[*]') IS NOT NULL",
        params: `email:${email}`
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

export default isApprover;