import { useReducer } from "react"

const is = { count: 0 }
const reducer = (state, action) => {
    switch (action.type) {
        case "inc": return { count:state.count+1};
        case "dec": return { count:state.count-1};
        case "reset": return { count: 0 };           
        default:return state;
            
    }


}
console.log("before return");

const App = () => {

    const [state, dispatch] = useReducer(reducer, is)
    return (
        <>
            <h3>use reducer</h3>
            <p>
                Count is :{state.count}
            </p>
            <button onClick={() => dispatch({ type: "inc" })}>increase</button>
            <button onClick={() => dispatch({ type: "dec" })}>decrease</button>
            <button onClick={() => dispatch({ type: "reset" })}>reset</button>
        </>


    )
}

export { App }