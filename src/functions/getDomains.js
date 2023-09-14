const getDomains = async () => {
    let domains = await fetch(`${process.env.REACT_APP_BACKEND_URL}?` + new URLSearchParams({
        enviornment: window.location.hostname,
        action: 'get_custom',
        table: 'domains',
        orderby: 'domain',
        orderbydirec: 'ASC'
    }));

    return await domains.json();
}

export default getDomains;