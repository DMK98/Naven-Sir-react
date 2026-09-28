import { useState } from "react";
import "./style.css"
const Diy6 = () => {
    const [data, setData] = useState({ roll: "", name: "" });
    const [records, setRecords] = useState([]);
    const handleInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const handleSubmit = () => {
        console.log("data :", data);
        console.log("--------------");

        console.log("blank records", [...records]);
        console.log("--------------");

        const rcds = [...records];
        rcds.push(data)
        console.log("spreading records", [rcds]);
        console.log("--------------");

        setRecords(rcds);
        console.log("records upadted", records);
        console.log("--------------");
        setData({ roll: "", name: "" });
    }
    const handleDel = (i) => {
        const recds = [...records];
          console.log("IN handleDel",recds);
          recds.splice(i,1);
          setRecords(recds)


    }



    return (
        <>
            <h2>DIY 6</h2>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="roll">Roll :</label>
                        </td>
                        <td>
                            <input type="text" id="roll" name="roll" value={data.roll} onChange={handleInput} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="name">Name :</label>
                        </td>
                        <td>
                            <input type="text" id="name" name="name" value={data.name} onChange={handleInput} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button style={{ width: "100%" }} onClick={handleSubmit}>Submit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr />

            {
                records.map((row, i) => {
                    return (
                        <div key={i} className="box">
                            <h3>SR No: {i+1}</h3>
                            <p>Roll:{row.roll}</p>
                            <p>Name:{row.name}</p>
                            <button onClick={()=>handleDel(i)}>X</button>
                        </div>
                    )
                })
            }
        </>
    )
}

export { Diy6 }