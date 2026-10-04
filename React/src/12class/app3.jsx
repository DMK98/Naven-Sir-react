import { useReducer } from "react";

import { is, reducer } from "./reducer.js"

const App = () => {

    const [state, dispatch] = useReducer(reducer, is);
    const no=700;
    return (
        <>
            <h2>useReducer</h2>
            <p>
                Count is :{state.count}
            </p>
            <button onClick={() => { dispatch({ type: "inc" }) }}>increment</button>
            <button onClick={() => { dispatch({ type: "incByval",payload:no })}}>increment{no}</button>
            <button onClick={() => { dispatch({ type: "dec" }) }}>decrement</button>
            <button onClick={() => { dispatch({ type: "reset" }) }}>reset</button>

        </>
    )
}

export { App }