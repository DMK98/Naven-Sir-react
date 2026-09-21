import { useState } from "react";
const App1 = () => {
    // let count = 1;
    const [no, setNo] = useState(10);
    const [fruit, setFruit] = useState("mango")
    const handleClick = (e) => {
        if (e.target.name === "no") {
            // no = no + 1;           
            setNo(no + 1);
            console.log("from no :", no);
        } else if (e.target.name === "fruit") {
            setFruit("guava");
            console.log("from fruit :", fruit);
        }


    }
    console.log("before return");
    return (
        <>
            <h1>App component 2</h1>
            count is :{no} <br />
            fruit is :{fruit} <br />
            <input type="button" value="change no" id="no" name="no" onClick={handleClick} />
            <input type="button" value="change fruit" id="fruit" name="fruit" onClick={handleClick} />
        </>
    )
}
export default App1;