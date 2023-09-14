const handlelocalSettings = (key, value) => {
    let localSettings = {}
    let getlocalSettings = localStorage.getItem("localSettings");

    if (isJsonString(getlocalSettings)) {
        localSettings = JSON.parse(getlocalSettings);
    }

    localSettings[key] = value;

    localStorage.setItem('localSettings', JSON.stringify(localSettings));
}

function isJsonString(str) {
    try {
        if(str === null) {
            return false;
        } else {
            JSON.parse(str);
        }
    } catch (e) {
        return false;
    }
    return true;
}

export default handlelocalSettings;