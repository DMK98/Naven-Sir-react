import { useState } from "react"
import "../4class/style.css";
import { Student } from "./student";
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

    const handleDel=(index)=>{
       const rcds=[...records];
       rcds.splice(index,1);
       setRecords(rcds)
    }
    // console.log("before return", count);
    // console.log("records", records);


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
                        <Student key={i} roll={row.roll} name={row.name} del={()=>handleDel(i)}/>
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
export  {App}