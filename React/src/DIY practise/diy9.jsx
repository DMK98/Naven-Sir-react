import { useState, useEffect } from "react";

const Diy9 = () => {
    const[count,setCount]=useState(0);
    const[fruit,setFruit]=useState("Apple");
    useEffect(()=>{
        console.log("SOMETHNG CHANGED");
        
    },[count,fruit])
    return (
        <>
        <h2>Task 1 — Practice useEffect</h2>
        <p>Count is:{count}</p>  
        <button onClick={()=>setCount(count+1)}>updatecount</button>
        <hr />
        <p>Fuit is:{fruit}</p>  
        <button onClick={()=>setFruit("mango")}>updatefruit</button>
        </>
    )

}

export {Diy9}