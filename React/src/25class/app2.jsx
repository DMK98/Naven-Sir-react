import axios from "axios";
import { useState } from "react";
import "./style.css"
const App = () => {
    const[no,setNo]=useState("");
    const[users,setUsers]=useState([]);
    const handleChange=(e)=>{
        setNo(e.target.value);
    }
    const handleClick = () => {
        console.log(no);
        
        axios.get('https://randomuser.me/api/?results='+no)
            .then(function (response) {
                console.log(response.data.results);
                setUsers(response.data.results)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <h3>Doubt session TASK</h3>
            No of user <input type="number" value={no} onChange={handleChange}/>
            <button onClick={handleClick}>Fetch</button>
            <hr />
            {
                users.map((user,i)=>{
                    return(
                        <div key={i} className="box">
                            <h3>{user.name.first}{user.name.last}</h3>
                            <p><img src={user.picture.large} alt="" /></p>
                            <p>{user.age}</p>
                            <p>{user.gender}</p>
                            <p>{user.email}</p>

                        </div>
                    )
                })
            }
        </>
    )
}
export { App }