import {useState,useEffect} from "react"
const App1 = () => {
   const[dt,setDt]=useState(new Date());
   useEffect(()=>{
    setInterval(() => {
        setDt(new Date())
    },1000);
   },[]);
  
   
    return (
        <>
            <h2>App1 Component</h2>
             <p>
                time is:{dt.toLocaleTimeString()}
             </p>           
        </>
    );
    

}
export { App1 }