import React from "react";
  
const DarkmodeSwitch = (props) => {
    const getlocalSettings = localStorage.getItem("localSettings");
    const localSettings = JSON.parse(getlocalSettings);

    return (
        <div className="container">
            <div className="toggle-switch">
                <input type="checkbox" className="checkbox" name={props.label} id={props.label} onChange={props.toggleDarkmode} checked={(localSettings && localSettings.darkmode ? "checked" : "")} />
                <label className="label" htmlFor={props.label}>
                    <span className="inner" />
                    <span className="switch" />
                </label>
            </div>
        </div>
    );
};
  
export default DarkmodeSwitch;