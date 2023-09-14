const getUniqueUsers = async (Message, toaster) => {
    return await fetch(`${process.env.REACT_APP_BACKEND_URL}?` + new URLSearchParams({
        enviornment: window.location.hostname,
        action: 'get_sites'
    }))
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        let userArr = [];
            
        result.forEach(sites => {
            if(sites.users){
                JSON.parse(sites.users).forEach(user => {
                    if(user.user_email){
                        if(!userArr.hasOwnProperty(user.user_email)){
                            userArr[user.user_email] = user;
                        }
                    }
                })
            }
        });

        return userArr;
    },
    (error) => {
        console.log(error)
        toaster.push(<Message showIcon type="error">{error.message}</Message>, { duration: 3000 });
    });
}

export default getUniqueUsers;