// import React,{ useState } from "react";
import { useState, createContext } from "react";
import { Process } from "./process";
// export const MyContext = React.createContext();
export const MyContext = createContext();
const App = () => {
    const [data, setData] = useState({ roll: 100, name: "mohit" });
    const handleUpdate=(r,nm)=>{
        setData({roll:r,name:nm})
    }
    const reset=()=>{
        setData({ roll: 100, name: "mohit" });
    }
    return (
        <>
            <p>useContext + useState | Part 1</p>
            <h3>App component</h3>
            <p>roll:{data.roll}</p>
            <p>name:{data.name}</p>
            <button 
            onClick={()=>{handleUpdate(900,"mohitkhanna")}}>updateFromApp
            </button>

             <button onClick={reset}>REST from APP</button>
            <hr />

            <MyContext.Provider value={{data,handleUpdate,reset}}>
                <Process />
            </MyContext.Provider>


            <hr />
        </>
    )
}

export { App }