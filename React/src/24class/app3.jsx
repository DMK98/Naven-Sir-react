import { useState } from "react";
import "./style.css"
const App = () => {
    const [data, setdata] = useState({ name: "", age: "", email: "", address: "", country: "", save: true,gender:"male" });
    const [show, setShow] = useState(null)
    const handleChange = (e) => {
        if (e.target.name === 'save') {
            setdata({ ...data, save: e.target.checked });
        }
        setdata({ ...data, [e.target.name]: e.target.value });
        // console.log(data);        
    }
    const handleSave = () => {
        if (data.save) {
            console.log(data);
            // setShow(true);
            setShow({ ...data });
        }


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
                    <tr>
                        <td><label htmlFor="country">Country</label></td>
                        <td>
                            <select name="country" id="country" value={data.country} onChange={handleChange}>
                                <option value="" disabled>Select Country</option>
                                <option value="India" >India</option>
                                <option value="america" >america</option>
                                <option value="australia" >australia</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="sure">Are you sure</label></td>
                        <td> <input type="checkbox" name="save" checked={data.save} onChange={handleChange} /> </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="gender">Gender</label></td>
                        <td>
                            <input type="radio" value="male" name="gender" onChange={handleChange} checked={data.gender==="male"}/>Male
                            <input type="radio" value="female" name="gender" onChange={handleChange}
                            />Female
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={handleSave}>Save</button><br />
            {
                show && (
                    <div className="box">
                        <p>{show.name}</p>
                        <p>{show.age}</p>
                        <p>{show.email}</p>
                        <p>{show.address}</p>
                        <p>{show.country}</p>
                        <p>{show.save}</p>
                        <p>{show.gender}</p>
                    </div>
                )
            }

        </>

    )
}

export { App }
