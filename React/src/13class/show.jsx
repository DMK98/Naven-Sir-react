import { MyContext } from "./app";
import { useContext } from "react";

const Show = () => {
    const dataFromApp=useContext(MyContext);
    console.log("DATA FROM APP",dataFromApp); 
    const {data, handleUpdate,reset}=dataFromApp;   
    return (
        <>
            <h3>show component</h3>
            <p>some data from show goes here</p>
            <p>ROLL : {dataFromApp.data.roll}</p>
            <p>NAME : {dataFromApp.data.name}</p>
            <button onClick={()=>{dataFromApp.handleUpdate(900,"mohitkhanna from delhi")}}>update SHow</button>
            <button onClick={reset}>REST from Show</button>
        </>
    )
}

export { Show }