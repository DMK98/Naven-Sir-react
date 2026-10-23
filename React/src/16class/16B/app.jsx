import { Home } from "./home";
import { About } from "./about";
import { Feedback } from "./feedback";
import Nav from "./menubar"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const App = () => {
    return (
        <>
            <h3>App component</h3>
            <p>React | 12 July | Doubts | Routing continues | Part 2</p>
            <hr />
            <Nav/>

                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/about/:uname" element={<About/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/feedback" element={<Feedback/>}></Route>
                </Routes>
           
        </>
    )
}
export { App }