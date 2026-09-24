import { useState } from "react"
import "../4class/style.css"

const App2 = () => {
    const [records, setRecords] = useState([]);
    const [data, setData] = useState({ roll: "", name: "" });
    const handleInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const add = () => {
        const recds = [...records];
        recds.push(data);
        setRecords(recds);
        setData({ roll: "", name: "" })
        console.log(data);
    }
    const handleDel=(index)=>{
        const recds=[...records];
        recds.splice(index,1);
        setRecords(recds);
        }

    return (
        <>
            <h1>App compnent 2.3</h1>
            <table>
                <tbody>
                    <tr>
                        <td><label htmlFor="name" >Name :</label></td>
                        <td><input type="text" id="name" name="name" value={data.name} onChange={handleInput} /></td>
                    </tr>
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
                            <button onClick={add}>ADD</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr />
            {
                records.map((row, i) => {
                    return (
                        <div className="box" key={i}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><p>{i + 1}</p></td>
                                    </tr>
                                    <tr>
                                        <td> <h3>Roll : {row.roll}</h3></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Name :{row.name}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button onClick={handleDel}>X</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                })
            }


            <div>

            </div>


        </>
    )
}

export { App2 }