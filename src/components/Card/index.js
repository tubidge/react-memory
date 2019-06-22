import React from "react";
import "./style.css";

function Card(props) {
    // create json object file containing objects for each image I want to use.
    // pass Card props from App.js by importing the json file.
    return (
        <div className="img-container" onClick={() => props.userGuess(props.id)}>
            <img className="img" alt={props.alt} src={props.image} />
        </div>
    )
};

export default Card;