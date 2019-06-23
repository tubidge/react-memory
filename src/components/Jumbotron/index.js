import React from "react";

function Jumbotron() {
    return (
        <div className="jumbotron">
            <h4>Game Instructions</h4>
            <p>Your goal is to click on each image one time and one time only. After each click, the images will be shuffled. It's your job to remember which images you have or have not clicked. If you click on the same image twice, the game will reset.</p>
        </div>
    );
};

export default Jumbotron;