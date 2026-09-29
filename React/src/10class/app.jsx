import { useEffect } from "react";
import { App1 } from "./app1";
const App = () => {
    // useEffect(()=>{
    //     console.log(" I am here");        
    // });
    // console.log("before return");

    return (
        <>
            {/* <h2>App Component</h2>
            <p>29 July | Component Lifecycle using <br /> useEffect | Part 1 & 2</p> */}
            <hr />

            <App1/>
        </>
    );
    // console.log("after return");

}
export { App }