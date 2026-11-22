import { useState } from "react";
const App = () => {
    const [data, setdata] = useState({ name: "", age: "", email: "", address: "", country: "", save: true, gender: "male" });
    const [show, setShow] = useState(null);
    const handleChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
        // console.log(data);
    }
    const handleSave = (e) => {
        e.preventDefault();
        console.log(data);
        setShow(data)
    }

    return (

        <>
            <h3> react form validation </h3>
            <form onSubmit={handleSave}>
                Name:<input type="text" id="name" name="name" value={data.name} onChange={handleChange} required pattern="[a-z]{5,10}" title="username must between 5 to 10 character spaces are not allowed" /> <br />
                Age:<input type="number" id="age" name="age" value={data.age} onChange={handleChange} required min={10} max={90} title="age must be between 10 to 90" /> <br />
                Email:<input type="text" id="email" name="email" value={data.email} onChange={handleChange} required pattern="[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,4}" title="eg:abc@gmail.com" /> <br />
                Address:<textarea rows="10" cols="22" name="address" id="address" value={data.address} onChange={handleChange}></textarea> <br />
                country : <select name="country" id="country" value={data.country} onChange={handleChange}>
                    <option value="" disabled>Select Country</option>
                    <option value="India" >India</option>
                    <option value="america" >america</option>
                    <option value="australia" >australia</option>
                </select> <br />
                <button>Save</button><br />
            </form>

            {show && (
                <>
                    Name :  {data.name} <br />
                    Age :  {data.age} <br />
                    Email :  {data.email} <br />
                    address : {data.address} <br />
                    country : {data.country}<br />
                </>
            )



            }
        </>
    )
}
export { App }