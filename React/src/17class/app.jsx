import { Routes, Route, Link, Navigate } from "react-router-dom";
import { Home } from "./home";
import { About } from "./about";
import { Feedback } from "./feedback";
import { Nav } from "./menubar";
import { Error } from "./errormsg";
const App = () => {
    const isLogged = false;
  
    return (
        <>
            <h3>14 Aug | Routing | Part 1 & 2</h3>
            <p>text from App component</p>

            <hr />
            <Nav />
            <hr />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {
                    isLogged ?
                        <>
                            <Route path="/about/:uname" element={<About />} />
                        </> : <>
                            <Route path="/about/:uname" element={<Navigate to="/feedback" />} />
                        </>
                }
                <Route path="/feedback" element={<Feedback />} />
                <Route path="*" element={<Error />} />
            </Routes>

        </>
    )
}
export { App }