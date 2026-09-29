import { App7 } from "./app7";
import { useState } from "react";
const App6 = () => {
    const [vbn, setVbn] = useState(true);
    // const handleRemove=()=>{
    //     setVbn(true)
    // }
    console.log("default VBN>>",vbn);
    
    const handleClick=()=>{
        setVbn(!vbn);
        console.log(vbn);
        
    }
    return (
        <>
            <h2>App6 component</h2>
            {/* <button onClick={()=>setVbn(false)} > remove Demo</button> */}
            {/* <button onClick={()=>setVbn(!vbn)} > remove Demo</button> */}
            <button onClick={handleClick} > remove Demo</button>
            {
                vbn? <App7/>:null
            }
        </>
    )
}
export { App6 }