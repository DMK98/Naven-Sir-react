import { useState } from "react"

const Diy = () => {
    const [no, setNO] = useState({ fn: "", sn: "", res: "" });
    const handleInput = (e) => {
        setNO({ ...no, [e.target.name]: e.target.value });
    }
    const result = () => {
        let c = Number(no.fn)+Number(no.sn);
         setNO({ ...no,res: c });

    }
    return (
        <>
            <h1>DIY</h1>
            <table>
                <tbody>
                    <tr>
                        <td><label htmlFor="fn">First NO:</label></td>
                        <td><input type="text" id="fn" name="fn" value={no.fn} onChange={handleInput} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="sn">Second NO:</label></td>
                        <td><input type="text" id="sn" name="sn" value={no.sn} onChange={handleInput} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="res">result</label></td>
                        <td><input type="text" id="res" name="res" value={no.res} disabled /></td>
                    </tr>
                    <tr>
                        <td><button onClick={result} >Add</button></td>

                    </tr>
                </tbody>
            </table>

            <hr />
        </>
    )
}
export { Diy }