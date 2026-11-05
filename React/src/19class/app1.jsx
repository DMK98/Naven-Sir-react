import axios from "axios";
import { useState } from "react";
import "./demo.css"
const App = () => {
    const [student, setStudent] = useState([]);
    const handleClick = () => {

        axios.get("https://6aeaeeb8ee39618d7bf7920a.mockapi.io/student")
            .then(function (response) {
                console.log(response.data);
                setStudent(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <h2> 21 Aug | Consume API using axios</h2>
            <button onClick={handleClick}>Click Me</button>
            <hr />
            {
                student.map(stu=>{
                    return(
                        <div key={stu.id} className="box">
                            <h3>{stu.name}</h3>
                            <p>{stu.age}</p>
                            <p>{stu.country}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export { App }