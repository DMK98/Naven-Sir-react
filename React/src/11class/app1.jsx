import { useState } from "react"
const App = () => {
    const[style,myStyle]=useState({ color: "white", backgroundColor: "Black", display: "inline-block"})
    const handleClick=()=>{
        myStyle({boxShadow:" rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px"})
    }
    return (
        <>
            <p style={style}>31 July | CSS, Image, Bootstrap CDN | Part 1& 2</p>
            <br />
            <button onClick={handleClick}>change heading</button>
        </>
    )
}

export { App }