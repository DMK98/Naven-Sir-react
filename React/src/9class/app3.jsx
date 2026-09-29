import { useState } from "react";
import { Test } from "./test";
// import { Test1 } from "./test1";

const App3 = () => {
    const age=17;

    return (
        <>
            <h2>conditional rendering</h2>
            {
                age >=18? 
                <>
                <h3>eligible to vote</h3> <h4>WOW</h4>
                </>
                : 
                <>
                <h3>can't vote</h3>
                <h3>Oops</h3>
                </>
            }

            <hr />
            {/* <Test/> */}
            {/* <Test1/> */}
        </>
    )
}

export { App3 }