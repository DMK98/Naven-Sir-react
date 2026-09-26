import { useState } from "react";
// import "./app2.css";
// import styles from "./CSS_MODULES/app2.module.css"

const App3 = () => {
    const [count, setCount] = useState(0);
    const arr = []
    if (count >= 10) {
        arr.push(styles.clr);
    } if (count >= 15) {
            arr.push(styles.bld);
    }
    console.log(arr);
    console.log(arr.join(" "));
    

    return (
        <>
            <h2>App2 bootstrap Component </h2>
            <div>
                <p className={arr.join(" ")}>Count is :{count}</p>
                <button onClick={() => setCount(count + 1)} className="btn btn-warning"> increase </button>
            </div>
        </>
    )
}

export { App3 }