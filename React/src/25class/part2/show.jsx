import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css"
const Show = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://6b0959de6a4ecd58b007436f.mockapi.io/users").then(response => {
            console.log(response.data);
            setUsers(response.data)

        }).catch(error => {
            console.log(error);
        });
    }, []);

    const handleDel = (id) => {
        console.log("del related logic", id);
        axios.delete("https://6b0959de6a4ecd58b007436f.mockapi.io/users/" + id).then(response => {
            console.log(response.data);
            console.log("data has been deleted from MOck API");


        }).catch(error => {
            console.log(error);
        });
        const updatedUsers = users.filter((user) => {
            return user.id !== id;
        });

    }

    return (
        <>
            <h2>Show Component</h2>
            {
                users.map((user, i) => {
                    return (
                        <div key={user.id} className="box">
                            <p>{i}</p>
                            <p>{user.id}</p>
                            <p>name : {user.name}</p>
                            <p>age : {user.age}</p>
                            <p>email : {user.email}</p>
                            <button onClick={() => handleDel(user.id)}>X</button>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Show;