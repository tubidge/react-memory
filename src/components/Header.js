import React from "react";
import ScoreCounter from "./ScoreCounter";

function Header(props) {
    return (
        <nav className="navbar">
            <ul>
                <li className="brand">
                    React Memory
            </li>
                <li>
                    <ScoreCounter />
                </li>
            </ul>
        </nav>
    )
};

export default Header;