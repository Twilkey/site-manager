const getEnvironment = (id = null) => {
    let arr = [
        'Production',
        'Staging',
        'Development'
    ];
    if(id === null) {
        return arr;
    } else {
        return arr[id];
    }
}

export default getEnvironment;