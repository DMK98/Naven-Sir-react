import { useReducer } from "react";

import { is, reducer } from "./reducer.js"
import * as actions from "./actions.js"

const App = () => {

    const [state, dispatch] = useReducer(reducer, is);
    const no = 70;
    return (
        <>
            <h2>useReducer</h2>
            <p>
                Count is :{state.count}
            </p>
            <button onClick={() => { dispatch({ type: actions.INC }) }}>increment</button>
            <button onClick={() => { dispatch({ type: actions.INC_BY_VAL, payload: no }) }}>increment{no}</button>
            <button onClick={() => { dispatch({ type: actions.DEC }) }}>decrement</button>
            <button onClick={() => { dispatch({ type: actions.RESET }) }}>reset</button>

        </>
    )
}

export { App }