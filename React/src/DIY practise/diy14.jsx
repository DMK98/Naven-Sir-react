import { useReducer } from "react"
import{is,reducer} from "./diy14A"

const Diy14 = () => {
    const [state, dispatch] = useReducer(reducer, is)
    console.log("before return state is>>", state);


    return (
        <>
            <p>use reducer</p>
            <p>STATE IS : {state.count}</p>
            <button onClick={() => dispatch({ type: "inc", payload:20 })}>Increase</button>
            <button onClick={() => dispatch({ type: "dec", payload:10 })}>Decrease</button>
            <button onClick={() => dispatch({ type: "res", payload:0 })}>reset</button>
        </>
    )

}
export { Diy14 }