import { useState } from "react"
import { Process } from "./diy15B"
const App = () => {
    const[data,setData]=useState({roll:21,name:"manish"})

    return (
        <>
            <h3>App component</h3>
            <p>use context</p>
            <p>some data from App compnent</p>
            <b><p>name:{data.name}</p>
            <p>roll:{data.roll}</p></b>
            <hr />

            <Process value={data}/>
        </>
    )
}

export { App }