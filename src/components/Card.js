import React from "react";

function Card(props) {
    // create json object file containing objects for each image I want to use.
    // pass Card props from App.js by importing the json file.
    return (
        <div className="card">
            <div className="img-container">
                Name: {props.name}
                <img alt={props.alt} src={props.image} />
            </div>
        </div>
    )
};

export default Card;