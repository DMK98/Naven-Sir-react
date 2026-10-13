import { useContext } from "react"
import { MyContext } from "./app"
const Show = () => {
    const { state,dispatch } = useContext(MyContext)
    return (
        <>
            <h3>Show Component</h3>
            <p>text from APP component</p>
            <p>ROll: {state.roll}</p>
            <p>Name: {state.name}</p>

            <button onClick={() => dispatch({ type: "update", payload: { r: 800, nm: "rahul" } })}>Update from Show</button>

            <button onClick={() => dispatch({ type: "reset" })}>reset from Show</button>
        </>
    )
}
export { Show }