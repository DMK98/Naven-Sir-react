import { useState } from "react"

const App = () => {
    /*const [fn, setFn] = useState("");
    const [sn, setSn] = useState("");
    const [res, setRes] = useState("");
    const handleFirst = (f) => {
        console.log(f.target.value);
        setFn(f.target.value)

    }
    const handleSecond = (s) => {
        console.log(s.target.value);
        setSn(s.target.value)
    }
    const handleRes = (r) => {
        let result = Number(fn) + Number(sn);
        setRes(result)
    }*/

    /*
const [data, setdata] = useState({ fn: "", sn: "", res: "" });
const handleChange = (e) => {
    if (e.target.name === "fn") {
        setdata({ ...data, fn: e.target.value });
    } else if (e.target.name === "sn") {
        setdata({ ...data, sn: e.target.value });
    }
}
const handleRes=()=>{
    let res=Number(data.fn)+Number(data.sn)
    setdata({ ...data, res:res });
}*/

    const [data, setData] = useState({ fn: "", sn: "",tn:"", res: "" });
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleRes = () => {
        let c = Number(data.fn) + Number(data.sn)+Number(data.tn);
        setData({ ...data, res: c })
    }

    return (
        <>
            <h1>App component</h1>
            {/* First Number: <input type="text" value={fn} onChange={handleFirst} /> <br /> */}
            First Number: <input type="text" value={data.fn} name="fn" onChange={handleChange} /> <br />
            {/* Second Number: <input type="text" value={sn} onChange={handleSecond} /> <br /> */}
            Second Number: <input type="text" name="sn" value={data.sn} onChange={handleChange} /> <br />
            Third Number: <input type="text" name="tn" value={data.tn} onChange={handleChange} /> <br />
            Result : <input type="text" value={data.res} readOnly /> <br />
            <button id="btn" onClick={handleRes}>Click me</button>

            <hr />
        </>
    )
}

export { App }