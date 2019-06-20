import React from "react";

function Card() {
    // create json object file containing objects for each image I want to use.
    // pass Card props from App.js by importing the json file.
    return (
        <div className="card">
            <div className="img-container">
                <img src="https://vignette.wikia.nocookie.net/spsot/images/b/b9/Randy_Marsh_facebook_profile.png/revision/latest?cb=20141024175401" />
            </div>
        </div>
    )
};

export default Card;