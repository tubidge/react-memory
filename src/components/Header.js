import React from "react";
// import ScoreCounter from "./ScoreCounter";

function Header(props) {
    return (
        // <div className="container">
        //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //         <a className="navbar-brand" href="#">
        //             React Memory
        //         </a>
        //         <ul>
        //             <li>
        //                 {props.children}
        //             </li>
        //         </ul>
        //     </nav>
        // </div>
        <div className="animal-card">
            <img alt={props.name} src={props.image} />
        </div>
    );
};

export default Header;