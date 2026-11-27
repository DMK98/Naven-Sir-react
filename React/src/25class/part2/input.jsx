import { useState } from "react";
import axios from "axios";
const Input = () => {
    const [data, setdata] = useState({ name: "", age: "", email: "" });
    const handleInput = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    }
    const handleSubmit = () => {
        console.log(data);
        axios.post("https://6b0959de6a4ecd58b007436f.mockapi.io/users", data).then(response => {
            console.log(response);
            console.log("data has been saved");

        }).catch(error => {
            console.log(error);
        });
        setdata({ name: "", age: "", email: "" })

    }
    return (
        <>
            <h2>Input Component</h2>
            <div>
                Name: <input type="text" name="name" value={data.name} onChange={handleInput} /> <br />
                Age: <input type="text" name="age" value={data.age} onChange={handleInput} /> <br />
                Email: <input type="text" name="email" value={data.email} onChange={handleInput} /> <br />
                <button onClick={handleSubmit}>Submit </button>
            </div>
        </>
    )
}

export default Input;