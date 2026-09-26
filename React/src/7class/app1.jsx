import { useState } from "react";
// import { Test } from "./test";
// import { Demo } from "./demo";
// import { App2 } from "./app2";
import { App3 } from "./app3";

const App1 = () => {
    const [myStyle,setMyStyle]=useState({backgroundColor:"yellow",color:"red", fontSize:"25px", display:"inline-block"});
    const handleUpdate = () => {
        setMyStyle(
            // {backgroundColor:"black",color:"red", fontSize:"25px",display:"inline-block"}
            {...myStyle, textDecoration: "underline"}
        )
    }

    return (
        <>
            {/*
         <h1>App1 component CSS</h1>
        <h2 style={{background:"yellow",color:'green',fontSize:'20px'}}>Lorem, ipsum.</h2> 
        */}
            {/* 
            <h1 style={myStyle}>Lorem, ipsum dolor.</h1> <br />
            <button onClick={handleUpdate}>Change Color</button>
             */}

            {/* <input type="button" value="update" onClick={handleUpdate} /> */}

            <hr />
            {/*
             <Demo/>
            <hr />
            <Test/> 
            */}

            {/* <App2/> */}
            <App3/>

        </>
    )
}

export { App1 }