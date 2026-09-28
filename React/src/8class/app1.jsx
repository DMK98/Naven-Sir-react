import { useState } from "react";


const App1 = () => {

    const [data, setdata] = useState({ roll: "", name: "" });
    const [record, setRecords] = useState([]);

    const handleInput = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
        // console.log(data.roll, data.name);
    }
    const handleShow = () => {
        const rcds = [...record];
        rcds.push(data);
        // console.log(rcds);        
        setRecords(rcds);
        // setdata(record)
        // console.log(data.roll, data.name);
        setdata({ roll: "", name: "" })
        console.log(record);
    }
    const handledel = (index) => {
        const rcds = [...record];
        rcds.splice(index, 1);
        setRecords(rcds);
    }


    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td><label htmlFor="roll">Roll :</label></td>
                        <td><input type="number" id="roll" onChange={handleInput} name="roll" value={data.roll} /> </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="name">Name :</label></td>
                        <td><input type="text" id="name" onChange={handleInput} name="name" value={data.name} /> </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button style={{ width: "100%" }} onClick={handleShow}>Add</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr />
            {
                record.map((row, i) => {
                    return (
                        <div key={i} className="box" style={{border:"1px solid", display:"inline-block", textAlign:"center"}}>
                            <p>SR no:{i + 1}</p>
                            <p>Roll :{row.roll}</p>
                            <p>Name :{row.name}</p>
                            <button aria-label="close" onClick={() => handledel(i)}>X</button>
                        </div>
                    )
                })
            }

        </>
    )
}
export { App1 }