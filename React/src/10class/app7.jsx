import { useEffect, useState } from "react";
const App1 = () => {
    const [count, setCount] = useState(1000);
    const [no, setNo] = useState(1);
    const [fruit, setFruit] = useState("Apple");
    useEffect(()=>{
        console.log(" 1st useEffect>> I am here");        
    })

    useEffect(() => {
        console.log(" 2nd useEffect>> I am here");
    },[no,fruit]);
    console.log("before return");

    return (
        <>
            <h2>App1 Component</h2>
            <p>some text for App1 Component</p>
            count is :{count} <br />
            <button onClick={() => setCount(count + 1)}>update count</button>
            <hr />
            No is :{no} <br />
            <button onClick={()=>setNo(parseInt(Math.random() * 500))} >Update NO</button>
            <hr />
            fruit :{fruit}
            <button onClick={()=>setFruit("mango")} >Update fruit</button>
        </>
    );
    // console.log("after return");

}
export { App1 }