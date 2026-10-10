import { MyContext } from "./app";
import { useContext } from "react";

const Show = () => {
    const dataFromApp=useContext(MyContext);
    console.log(dataFromApp);    
    return (
        <>
            <h3>show component</h3>
            <p>some data from show goes here</p>
            <p>ROLL : {dataFromApp.data.roll}</p>
            <p>NAME : {dataFromApp.data.name}</p>
            <button onClick={dataFromApp.handleUpdate(100, raju)}></button>
        </>
    )
}

export { Show }