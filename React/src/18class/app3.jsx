import {useState} from "react";
import "./demo.css";
const App = () => {
     const[users,setUsers]=useState([]);
    const handleClick = () => {
       
        async function getData() {
            const url = "https://randomuser.me/api/";
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }

                const result = await response.json();
                console.log(result.results);
                setUsers(result.results)
            
            } catch (error) {
                console.error(error.message);
            }
        }
        getData();
    }

    console.log("USER",users);
    
    return (
        <>
            <h2>App Comonent</h2>
            <button onClick={handleClick}>Click me</button>
            {
                 users.map((user,i)=>{
                    return(
                        <div key={i} className="box">
                            <h3>{user.name.first}{ user.name.last}</h3>
                            <img src={user.picture.large} alt="" />
                            <p>{user.gender}</p>    
                            <p>{user.dob.age}</p>    
                            <p>{user.email}</p>    
                            <p>{user.phone}</p>    
                        </div>
                    )
                 })   
            }
        </>
    )
}
export { App }