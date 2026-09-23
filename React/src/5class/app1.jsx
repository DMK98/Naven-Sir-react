import { useState } from "react";

const App1 = () => {
    const [data, setData] = useState({ fn: "", sn: "", res: "" });
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleRes = () => {
            let c=Number(data.fn)+Number(data.sn);
            setData({ ...data,res:c})
    }
    return (
        <>
            <h1>App component 2.2</h1>

            <label>First No :<input type="text" name="fn" value={data.fn} onChange={handleChange} /></label> <br />
            <label>Second No :<input type="text" name="sn" value={data.sn} onChange={handleChange} /></label>
            <button onClick={handleRes}>add</button>
            <hr />
            <label>Result :<input type="text" name="res" value={data.res} disabled /></label>


            <hr />
        </>
    )
}
export default App1