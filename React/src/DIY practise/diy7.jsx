import { useEffect, useState } from "react";
import{App1} from "../10class/app1"

const Diy7 = () => {
    const [count, setCount] = useState(0);
    const [fruit, setFruit] = useState("Apple");
    const [no, setNo] = useState(parseInt(Math.random() * 500));
    const [time, setTime] = useState(new Date())
    useEffect(() => {
        console.log(">>1st useEffect above RETURN");

    }, [count, fruit]);

    useEffect(() => {
        // console.log(">>2nd time useEffect above RETURN");
        let interval=setInterval(()=>{
             setTime(new Date())   
        },1000);
       
    },[])
    
    const handleUpdateNO = () => {
        setNo(parseInt(Math.random() * 500));
    }


    console.log("-------- BELOW RETURN --------");
    return (
        <>
            <h2>practising useEffect</h2>
            <hr />
            <p>Count is : {count}</p>
            <button onClick={() => (setCount(count + 1))}>Update Count</button>
            <hr />
            <p>Fruit is : {fruit}</p>
            <button onClick={() => (setFruit("MANGO"))}>Update fruit</button>
            <hr />
            <p>Random No : {no}</p>
            <button onClick={handleUpdateNO}>Update no</button>
            <hr />
            <h3>TIME :{time.toLocaleTimeString()}</h3>
            <hr />
            

        </>

    )
}

export { Diy7 }