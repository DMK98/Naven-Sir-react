import { useEffect,useState } from "react";
const App1 = () => {
    const[count,setCount]=useState(1000)
    useEffect(()=>{
        console.log(" I am here");        
    });
    console.log("before return");

    return (
        <>
            <h2>App1 Component</h2>
            <p>some text for App1 Component</p>
            count is :{count}
            <button onClick={()=>setCount(count+1)}>click</button>
            <hr />
        </>
    );
    // console.log("after return");

}
export { App1 }