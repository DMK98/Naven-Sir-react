import { useState } from "react"
import { Process } from "./process"
const App=()=>{
    const[data,setData]=useState({roll:100,name:"mohit"});

    return(
        <>
            <p>useContext + useState | Part 1</p>

            <hr />
            <Process roll={data.roll} name={data.name}/>
            <hr />

           
        </>
    )
}

export {App}