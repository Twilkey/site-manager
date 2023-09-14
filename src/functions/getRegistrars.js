const getRegistrars = async () => {
    let data = await fetch(`${process.env.REACT_APP_BACKEND_URL}?` + new URLSearchParams({
        enviornment: window.location.hostname,
        action: 'get_custom',
        table: 'registrars',
        orderby: 'name',
        orderbydirec: 'ASC'
    }));

    return await data.json();
}

export default getRegistrars;