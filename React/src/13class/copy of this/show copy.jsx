import { useState } from "react";
import { Process } from "./process";

const Show = (props) => {
    return (
        <>
            <h3>show component</h3>
            <p>some data from show goes here</p>
            {props.roll} <br />
            {props.name}
        </>
    )
}

export { Show }