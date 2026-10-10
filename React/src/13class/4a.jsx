// import React,{ useState } from "react";
import { useState, createContext } from "react";
import { Process } from "./process";
// export const MyContext = React.createContext();
export const MyContext = createContext();
const App = () => {
    const [data, setData] = useState({ roll: 100, name: "mohit" });

    return (
        <>
            <p>useContext + useState | Part 1</p>
            <h3>App component</h3>
            <p>roll:{data.roll}</p>
            <p>name:{data.name}</p>
            <hr />

            <MyContext.Provider value={data}>
                <Process />
            </MyContext.Provider>


            <hr />
        </>
    )
}

export { App }