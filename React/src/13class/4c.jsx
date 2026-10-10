import { MyContext } from "./app";
import { useContext } from "react";

const Show = (props) => {
    const dataFromApp=useContext(MyContext);
    console.log(dataFromApp);    
    return (
        <>
            <h3>show component</h3>
            <p>some data from show goes here</p>
            <p>ROLL : {dataFromApp.roll}</p>
            <p>NAME : {dataFromApp.name}</p>
        </>
    )
}

export { Show }