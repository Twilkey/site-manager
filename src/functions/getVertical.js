const getVertical = (id = null) => {
    let arr = [
        'APAC',
        'EMEA',
        'North America'
    ];
    if(id === null) {
        return arr;
    } else {
        return arr[id];
    }
}

export default getVertical;