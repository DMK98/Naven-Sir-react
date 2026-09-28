import { useState } from "react"
const Diytest5 = () => {
    const [inputNo, setinputNo] = useState("");
    const [output, setOuput] = useState("");

    const handleCheck = () => {
        console.log("INPUT NO: ", inputNo);
        if (inputNo >= 18) {
            setOuput(
                <h2>Eligible to vote</h2>
            )
        } else {
            setOuput(
                <h2>Not Eligible to vote</h2>
            )
        }

        setinputNo("")

    }
    return (
        <>
            <h2>check  eligiblity</h2>
            <label> Enter Age:
                <input type="number" value={inputNo} onChange={(e) => { setinputNo(e.target.value) }} />
            </label> <br />
            <button onClick={handleCheck}>Check</button>
            {output}

        </>
    )
}

export { Diytest5 }