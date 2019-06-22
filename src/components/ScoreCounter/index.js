import React from "react";

function ScoreCounter(props) {
    return (
        <div>
            Score: {props.score} | Top Score: {props.topScore}
        </div>
    );
};

export default ScoreCounter;