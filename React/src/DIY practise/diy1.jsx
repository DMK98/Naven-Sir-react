import { useState } from "react";

const DiyInputpractise = () => {
    const [no, setNo] = useState({ fno: "", sno: "", res: "" });

    const handleInput = (e) => {
        setNo({ ...no, [e.target.name]: e.target.value })
    }
    const handleRsesult = () => {
        let c = Number(no.fno) + Number(no.sno);
        console.log(c);
        
        setNo({ ...no, res: c })
    }
    return (
        <>
            <h1>DIY Input practise</h1>
            <table>
                <tbody>
                    <tr>
                        <td><label htmlFor="fno">First NO :</label></td>
                        <td><input type="number" id="fno" name="fno" value={no.fno} onChange={handleInput} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="sno">First NO :</label></td>
                        <td><input type="number" id="sno" name="sno" value={no.sno} onChange={handleInput} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="res">Result :</label></td>
                        <td><input type="number" id="res" name="res" value={no.res} disabled /></td>
                    </tr>
                    <tr>
                        <td><button onClick={handleRsesult}>Add</button></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export { DiyInputpractise }