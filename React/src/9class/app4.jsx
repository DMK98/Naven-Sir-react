import { useState } from "react";

const App4 = () => {
    const [data, setData] = useState("");
    const [output, setOutput] = useState("");

    // const handleChange = (e) => {
    //     setData(e.target.value);
    // }

    // let age = 17;
    // let output = null;

    // if (age >= 18) {
    //     output = (
    //         <>
    //             <h2>vote can be given </h2>
    //         </>
    //     )
    // } else {
    //     output = (
    //         <>
    //             <h2>vote cannot be given </h2>
    //         </>
    //     )
    // }

    const handlecheck = () => {
        console.log(data);
        setData("");
        if (data >= 18) {
            return (
                setOutput(
                    <>
                        <h2>vote can be given </h2>
                    </>
                )
            )
        } else {
            return (
                setOutput(
                    <>
                        <h2>vote cannot be given </h2>
                    </>
                )
            )
        }
    }

    return (
        <>
            <h1>App4 component </h1>
            <label>Enter AGE
                <input type="number" value={data} onChange={(e) => setData(e.target.value)} />
            </label>
            <button onClick={handlecheck}>check</button>
            {output}
        </>
    )
}
export { App4 }