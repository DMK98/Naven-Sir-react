import { useState } from "react";
import style from "./Astyle.module.css";
const App = () => {
    const [count, setCount] = useState(1);
    const arr=[]
    const handleCount = () => {
        setCount(count + 1);
    };
    if (count>=10) {
          arr.push(style.bldGreen); 
        //   console.log(arr);
          console.log(arr.join(" "));
           
    }else if(count>=5){
        arr.push(style.bldrRed);  
        console.log(arr.join(" "));
    }
   
    return (
        <>
            <p>31 July | CSS, Image, Bootstrap CDN | Part 2</p>

            <div className={arr.join(" ")}>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>count is : {count}</p>
            </div>

            <button onClick={handleCount}>
                update Count
            </button>
        </>
    );
};

export { App };