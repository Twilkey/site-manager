const getUserRoles = (id = null) => {
    let arr = [
        'Subscriber',
        'Contributor',
        'Author',
        'Editor',
        'Administrator'
    ];
    if(id === null) {
        return arr;
    } else {
        return arr[id];
    }
}

export default getUserRoles;