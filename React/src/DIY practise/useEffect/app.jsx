import { useState, createContext } from "react";
import { Process } from "./process";
export const MyContext = createContext();
const App = () => {
    const [data, setData] = useState({ roll: 21, name: "manish" });
    const handleUpdate=()=>{
        setData({ roll: 222, name: "Manoj" })
    }
    const reset=()=>{
        setData({roll: 21, name: "manish" })
    }
    return (
        <>
            <h3>App component</h3>
            <p>some text from APP component</p>
            <p>ROll:{data.roll}</p>
            <p>NAME:{data.name}</p>
            <button onClick={handleUpdate}>updateFromApp</button>
            <button onClick={reset}>Reset</button>
            <hr />
            <MyContext.Provider value={{data,handleUpdate,reset}}>
                <Process />
            </MyContext.Provider>


        </>
    )
}
export { App }