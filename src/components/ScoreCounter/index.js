import React from "react";

function ScoreCounter(props) {
    return (
        <li className="nav-item">
            Score: {props.score} | Top Score: {props.topScore}
        </li>
    );
};

export default ScoreCounter;