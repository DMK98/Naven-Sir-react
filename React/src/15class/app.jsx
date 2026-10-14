import { Home } from "./home";
import { Input } from "./input";
import { Show } from "./show";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { is, reducer } from "./reducer";
import { useReducer, createContext } from "react";
export const MyContext = createContext();

const App = () => {
    const [state, dispatch] = useReducer(reducer, is);

    return (
        <>
            <h3>TASK take input show in other tab using useContext, use Reducer </h3>
            <hr />
            <BrowserRouter>
                <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/input">Input</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/show">Show</Link>
                <MyContext.Provider value={{state,dispatch}}>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/input" element={<Input />}></Route>
                        <Route path="/show" element={<Show />}></Route>
                    </Routes>
                </MyContext.Provider >


            </BrowserRouter>
            <hr />


        </>

    )
}

export { App }