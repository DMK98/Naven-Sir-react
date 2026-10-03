import { useState } from "react"

const Diy10 = () => {
    const [data, setdata] = useState({ roll: "", name: "", });
    const [record, setRecords] = useState([]);
    const handleInput = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    }
    const handleAdd = () => {
        const rcds = [...record];
        rcds.push(data);
        setRecords(rcds);
        setdata({ roll: "", name: "", })
    }
    const del = (i) => {
        const rcds=[...record];
        rcds.splice(i,1);
        setRecords(rcds);
    }
    return (
        <>
            <h3>DIY 10 component</h3>
            <label>Roll No<input type="no" name="roll" value={data.roll} onChange={handleInput} /></label><br />
            <label>Name<input type="text" name="name" value={data.name} onChange={handleInput} /></label>
            <button onClick={handleAdd}>add</button>
            <hr />
            {
                record.map((row, i) => {
                    return (
                        <div key={i}>
                            <h3>sr no{i + 1}</h3>
                            <h3>ROll :{row.roll}</h3>
                            <h3>Name :{row.name}</h3>
                            <button onClick={()=>del(i)}>X</button>
                        </div>
                    )
                })
            }
        </>
    )
}

export { Diy10 }