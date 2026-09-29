import { useState, useEffect } from "react";

const Diy8 = () => {
    const[count,setCount]=useState(0);
    useEffect(()=>{
        console.log("Count changed");
        
    },[count])
    return (
        <>
        <h2>Task 1 — Practice useEffect</h2>
        <p>Count is:{count}</p>  
        <button onClick={()=>setCount(count+1)}>Add</button>
        <hr />
        </>
    )

}

export {Diy8}