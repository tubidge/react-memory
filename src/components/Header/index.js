import React from "react";
import "./style.css";

function Header(props) {
    return (
        <nav className="navbar navbar-default">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">
                    React Memory
                </a>
            </div>
            <ul className="nav">
                {props.children}
            </ul>
        </nav>
    )
};

export default Header;