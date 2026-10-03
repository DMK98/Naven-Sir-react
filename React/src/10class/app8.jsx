import { App1 } from "./app1";
import { useState } from "react";

const App8 = () => {
    const [vbl, setVbl] = useState(true);
    return (
        <>
            <p>29 July | Component Lifecycle using useEffect | Part 2</p>
            <button onClick={() => setVbl(!vbl)}>remove clock</button>
            {
                vbl ? <App1 />:null
              
            }
        </>
    )
}
export { App8 }