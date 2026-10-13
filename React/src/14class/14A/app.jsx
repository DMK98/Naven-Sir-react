import { createContext, useReducer } from "react";
import { Process } from "./process";
import { is, reducer } from "./reducer";
export const MyContext = createContext()
const App = () => {
    const [state, dispatch] = useReducer(reducer, is)
    return (
        <>
            <h3>App Component</h3>
            <p>text from APP component</p>
            <p>ROll: {state.roll}</p>
            <p>Name: {state.name}</p>

            <button onClick={() => dispatch({ type: "update", payload: { r: 200, nm: "samir" } })}>Update from APP</button>

            <button onClick={() => dispatch({ type: "reset" })}>reset from APP</button>
            <hr />

            <MyContext.Provider value={{state,dispatch }}>
                <Process />
            </MyContext.Provider>
        </>
    )
}
export { App }