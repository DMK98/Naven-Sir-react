import { useReducer } from "react";

const is = { count: 10 };
const reducer = (state, action) => {
    return {count:1000}
}


const App = () => {

    const [state, dispatch] = useReducer(reducer, is);


    console.log("BEFORE RETURN state is",state);
    return (
        <>
            <h2> 2 Aug | useReducer | Part 1 & 2</h2>
            <p>count is {state.count}</p> <br />
            <button onClick={()=>dispatch()}>click</button>

        </>
    );
};

export { App };