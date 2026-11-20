import { useState } from "react"
const App = () => {
    const [data, setdata] = useState({ name: "", age: "", email: "", address: "" });
    const handleChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
        // console.log(data);        
    }
    const handleSave = () => {
        console.log(data);

    }
    return (
        <>
            <h3>2 Sep | Forms | Forms Validation | Part 1 & 2</h3>
            <table>
                <tbody>
                    <tr>
                        <td><label htmlFor="name">Name</label></td>
                        <td><input type="text" id="name" name="name" value={data.name} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="age">Age</label></td>
                        <td><input type="text" id="age" name="age" value={data.age} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="email">Email</label></td>
                        <td><input type="text" id="email" name="email" value={data.email} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="address">address</label></td>
                        <td><textarea rows="10" cols="22" name="address" id="address" value={data.address} onChange={handleChange}></textarea></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={handleSave}>Save</button>
        </>

    )
}

export { App }
// 9:29