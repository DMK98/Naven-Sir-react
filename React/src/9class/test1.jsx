import { useState } from "react";
const Test1 = () => {
    const [data, setData] = useState("");
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("")
    const handleNO = (e) => {
        setInput(e.target.value)
    };
    const handleCheck = () => {

        setInput("");
        if (input >= 18) {
            setOutput(<h2>eligible</h2>);
        } else {
            setOutput(<h2>not eligible</h2>)
        }
    };



    return (
        <>
            <label>
                Enter AGE :  <input type="number" value={input} onChange={handleNO} />
                <button onClick={handleCheck}>Check</button>
                {output}
            </label>
        </>
    )
}
export { Test1 }