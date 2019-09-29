import React from "react";
import "./style.css";

function Header(props) {
    return (
        <nav className="navbar navbar-default">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">
                    <h4>React Memory</h4>
                </a>
            </div>
            <ul className="nav">
                {props.children}
            </ul>
        </nav>
    )
};

export default Header;