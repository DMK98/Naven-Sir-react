import { useState } from "react"

const Test = () => {
    const [data, setData] = useState("");
    const [output, setOutput] = useState("");


    const handleno = (e) => {
        setData(e.target.value);
    }
    const HandleCheck = () => {
        if (data >= 18) {
            setOutput(<h3>eligible to vote</h3>);
        }else{
            setOutput(<h3>Not eligible to vote</h3>);
        }

    };

    return (
        <>
            <h3>Test Component</h3>
            <p>enter age to check eligiblity</p>
            <label>Enter Age :
                <input type="number" value={data} onChange={handleno} />
            </label>
            <button onClick={HandleCheck}>Check</button>
            {output}
        </>
    )
}
export { Test }