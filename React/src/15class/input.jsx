import { useState,useContext } from "react";
import { MyContext } from "./app";

const Input = () => {
    const[data,setData]=useState({roll:"",name:"",age:"",email:""});
      const { dispatch } = useContext(MyContext);
    const[records,setrecords]=useState([]);

    const handleInput=(e)=>{
            setData({...data,[e.target.name]:e.target.value});
            // console.log(data);           
    }
    const handleSubmit=()=>{
            const rcds=records.slice();
            rcds.push(data);
            setrecords(rcds);
            setData({roll:"",name:"",age:"",email:""});
            console.log("RECORDS",records);                     
            console.log("DATA",data);
            dispatch({type:"add", payload:data})           
    }


    return (
        <>
            <h3>INPUT PAGE</h3>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="roll">Enter Roll no :</label>
                        </td>
                        <td>
                            <input type="number" id="roll" value={data.roll} name="roll" onChange={handleInput} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="name">Enter Name :</label>
                        </td>
                        <td>
                            <input type="text" id="name" value={data.name} name="name"  onChange={handleInput} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="age">Enter Age :</label>
                        </td>
                        <td>
                            <input type="number" id="age" value={data.age} name="age" onChange={handleInput} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="email">Enter E-mail :</label>
                        </td>
                        <td>
                            <input type="email" id="email"  value={data.email} name="email" onChange={handleInput}/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button style={{ width: "100%" }} onClick={handleSubmit}>Submit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export { Input }