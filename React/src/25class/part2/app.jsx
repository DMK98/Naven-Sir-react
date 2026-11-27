import Home from "./home";
import Input from "./input";
import Show from "./show";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const App = () => {

    return (

        <>
            <h2>4 Sept TASK | Doubt session | mock API</h2>
            <Router>
                <hr />
                <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/input">Input</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/show">Show</Link>
                <hr />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/input" element={<Input />}></Route>
                    <Route path="/show" element={<Show />}></Route>
                </Routes>
            </Router>
        </>
    )
}
export { App }