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
        <>
        <h3> react form validation</h3>
        </>
        <>
            <p>lorem 100</p>

        </>
        </>
    )
}
export { App }