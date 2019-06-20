import React from "react";
import { tsPropertySignature } from "@babel/types";

function CardContainer(props) {
    return <div className="wrapper">{props.children}</div>;
};

export default CardContainer;