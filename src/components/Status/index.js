import React from "react";
import "./style.css";

function Status(props) {
    return (
        <div className="status-bar">
            <p className="status-text">
                <h4>{props.status}</h4>
            </p>
        </div>
    )
};

export default Status;