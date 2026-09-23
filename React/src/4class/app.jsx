import { useState } from "react"
import "./style.css"
const App = () => {
    // const [count,setCount]=useState(5000);
    // const[data,setData]=useState({roll:21,name:"Manish"})
    const [records, setRecords] = useState([
        { roll: 21, name: "Manish" },
        { roll: 22, name: "Anish" },
        { roll: 23, name: "Danish" },
        { roll: 24, name: "Rajnish" },
        { roll: 25, name: "Mohit" },
    ])
    const hanndleUpdate = () => {
        // setData({roll:21,name:"kunal kapoor"})
        // setData({...data,roll:22,name:"kunal kapoor", place:"Noida"})
        setRecords(
            [
                { roll: 201, name: "Rohan" },
                { roll: 202, name: "Sohna" },
                { roll: 203, name: "Chandni" },
                { roll: 204, name: "Amit" },
                { roll: 205, name: "Rohit" },
            ]
        )
    }
    // console.log("before return", count);
    console.log("records", records);


    return (
        <>
            <h1>App component</h1>
            {/* No is :{count} */}

            {/* <p>Roll :{data.roll}</p>
        <p>name :{data.name}</p>        
        <p>Place :{data.place}</p>*/}

            {
                records.map((row, i) => {
                    return (
                        <div key={i} className="box">
                            <h3>{i + 1}</h3>
                            <h2>{row.roll}</h2>
                            <p>{row.name}</p>
                        </div>
                    )
                })
            }
            <br />

            <input type="button" value="update" onClick={hanndleUpdate} className="btn"/>

            <hr />
            <p>========END OF APP COMPONENT==============</p>
            <hr />
        </>
    )
}
export default App