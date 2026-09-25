import { useState } from "react"
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
            <h1 style={myStyle}>Lorem, ipsum dolor.</h1> <br />
            <button onClick={handleUpdate}>Change Color</button>
            {/* <input type="button" value="update" onClick={handleUpdate} /> */}

        </>
    )
}

export { App1 }