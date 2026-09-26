import "../8class/style.css";
import { useState } from "react";

const Calculator = () => {
    const [data, setdata] = useState({ fn: "", opt: "", res: "" })
    const handleNo = (e) => {
        setdata({ ...data, res: data.res + e.target.value })
        // console.log(e.target.value);
    }

    const handleOpt = (e) => {
        setdata({ fn: data.res, opt: e.target.value, res: "" })
    }
    const handleEql = () => {
        const a = Number(data.fn);
        const b = Number(data.res);
        let c = 0;
        switch (data.opt) {
            case "+": c = a + b;
                break;
            case "-": c = a - b;
                break;
            case "*": c = a * b;
                break;
            case "/": c = parseInt(a / b);
                break;
        }
        setdata({fn:"",opt:"",res:c})
    }

    const handleClear=()=>{
        setdata({fn:"",opt:"",res:""})
    }
    console.log("before return", data);

    return (
        <>
            <h3>CALCULATOR</h3>
            <input type="text" readOnly value={data.res} /> <br />
            <button onClick={handleNo} value="1">1</button>
            <button onClick={handleNo} value="2">2</button>
            <button onClick={handleNo} value="3">3</button>
            <button onClick={handleNo} value="4">4</button> <br />
            <button onClick={handleNo} value="5">5</button>
            <button onClick={handleNo} value="6">6</button>
            <button onClick={handleNo} value="7">7</button>
            <button onClick={handleNo} value="8">8</button><br />
            <button onClick={handleNo} value="9">9</button>
            <button value="+" onClick={handleOpt}>+</button>
            <button value="-" onClick={handleOpt}>-</button>
            <button value="*" onClick={handleOpt}>*</button><br />
            <button value="/" onClick={handleOpt}>/</button>
            <button value="=" onClick={handleEql}>=</button>
            <button  onClick={handleClear}>CLR</button>
        </>
    )
}
export { Calculator }
