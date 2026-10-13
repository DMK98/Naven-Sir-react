import { Home } from "./home"
import { About } from "./about";
import { Feedback } from "./feedback";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
const App = () => {

    return (
        <>
            <BrowserRouter>
                <h3>Simple Routing App component</h3>
                <p>text from APP Component</p>
                <hr />
                <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/about">About</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/feedback">Feedback</Link>
                <hr />
                <Routes>
                    <Route path="/" element={<Home/>}  />
                    <Route path="/about" element={<About/>}  />
                    <Route path="/feedback" element={<Feedback/>}  />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export { App }