import { useState } from "react"
const Diy11 = () => {
    const [invalidname, setInvalidname] = useState("");
    const [data, setData] = useState({ roll: "", name: "" })
    const[records,setRecords]=useState([]);
    const handleInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleBtn = () => {
        let rollCheck = /^[0-9]+$/
        let nameCheck = /^[a-zA-Z]+$/
        if (data.roll === "") {
            setInvalidname("roll can't blank");
            return;
        } if (data.name === "") {
            setInvalidname("name can't blank");
            return;
        }
        if(rollCheck.test(data.roll) === false) {
            setInvalidname("invalid roll");
            return;
        }if (nameCheck.test(data.name) === false) {
            setInvalidname("invalid name");
            return;
        }
        setInvalidname("submitted");       
        const rcds=[...records];
        rcds.push(data);
        setRecords(rcds);        
        setData({roll:"", name:""})        
    }
    const handleDel=(i)=>{
        const recds=[...records];
        recds.splice(i,1)
        setRecords(recds)
        
    }


    return (
        <>
            <h3>React Practice Task — Student List</h3>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="roll">Roll :</label>
                        </td>
                        <td>
                            <input type="number" id="roll" name="roll" value={data.roll} onChange={handleInput} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="name">Name :</label>
                        </td>
                        <td>
                            <input id="name" name="name" value={data.name} onChange={handleInput} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button style={{ width: "100%" }} onClick={handleBtn}>Submit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>{invalidname}</p>
                {
                    records.map((row,i)=>{
                        return(
                            <div key={i} style={{margin:"1px",padding:"5px", border:"1px solid", display:"inline-block"}}>
                                <h3>sr no{i+1}</h3>
                                <p>ROLL NO: {row.roll}</p>
                                <p>Name : {row.name}</p>
                                <button onClick={()=>handleDel(i)}>X</button>

                            </div>
                        )
                    })
                }


        </>
    )
}
export { Diy11 }
