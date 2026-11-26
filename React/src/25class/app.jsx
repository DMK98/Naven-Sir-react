import axios from "axios";
import { useState, useEffect } from "react";
import "./style.css"
const App = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        // console.log(no);

        axios.get('https://randomuser.me/api/')
            .then(function (response) {
                console.log(response.data.results);
                setUsers(response.data.results)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const handleClick = () => {
        axios.get('https://randomuser.me/api/')
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
            {/* No of user <input type="number" value={no} onChange={handleChange}/> */}
            {/* <button onClick={handleClick}>Fetch</button> */}
            <button onClick={handleClick}>Fetch</button>
            <hr />
            {
                users.map((user, i) => {
                    return (
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