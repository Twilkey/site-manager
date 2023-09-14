const UpdateData = async (toaster, Message, action, table, params, where, title) => {
    var formData = new FormData();
    formData.append('action', action);
    formData.append('enviornment', window.location.hostname);
    if(table !== null) {
        formData.append('table', table);
    }
    if(where !== null) {
        formData.append('where', where);
    }
    formData.append('params', JSON.stringify(params));

    await fetch(`${process.env.REACT_APP_BACKEND_URL}`, {
        method: 'POST',
        mode: 'cors',
        body: formData
    })
    .then((response) => {
        if (!response.ok) {
            toaster.push(<Message showIcon type="error">Network response was not OK</Message>, { duration: 3000 });
            throw new Error("Network response was not OK");
        }
        return response.json();
    })
    .then((result) => {
        toaster.push(<Message showIcon type="success">{title} was successfully updated</Message>, { duration: 3000 });
        return result;
    })
    .catch((error) => {
        toaster.push(<Message showIcon type="error">There has been a problem with your fetch operation: {error}</Message>, { duration: 3000 });
        console.error("There has been a problem with your fetch operation:", error);
    });
}

export default UpdateData;