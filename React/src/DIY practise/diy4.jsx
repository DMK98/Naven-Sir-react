import { useState } from "react"
import "../4class/style.css"
const Diy4 = () => {

    const [records, setRecords] = useState([]);
    const [no, setNo] = useState({ name: "", roll: "" });
    const handleInput = (e) => {
        setNo({ ...no, [e.target.name]: e.target.value })
    }
    const add = () => {
        const recds = [...records];
        console.log(recds);
        recds.push(no)
        console.log(recds);
        setRecords(recds)
        setNo({ name: "", roll: "" });
    }
    const  handleClose=(index)=>{
        const rcds=[...records];
        rcds.splice(index,1)
        setRecords(rcds);
    }
    
    return (
        <>
            <h3>take input roll & name display i box onclick of close it should be close</h3>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="name">Name</label>
                        </td>
                        <td>
                            <input type="text" id="name" onChange={handleInput} name="name" value={no.name} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="roll">Roll</label>
                        </td>
                        <td>
                            <input type="text" id="roll" name="roll" value={no.roll} onChange={handleInput} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={add} >Add</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr />
            {
                records.map((row,i)=>{
                    return(
                        <div className="box" key={i}>
                            <h4>Sr No :{i+1}</h4>
                            <p>Name:{row.name}</p>    
                            <p>Roll:{row.roll}</p>
                            <button onClick={handleClose}>X</button>    
                        </div>
                    )
                })
            }
        </>
    )
}

export { Diy4 }