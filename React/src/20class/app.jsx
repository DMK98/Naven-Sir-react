import axios from "axios";
import { useState } from "react";
const App = () => {
    const [user, setUser] = useState([]);
    const handleClick = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(response);
        setUser(response.data)

    }
    return (
        <>
            <h3>26 Aug | Consume API | Part 1 & 2 jSON place holder</h3>

            <button onClick={handleClick}>click me </button>
            <hr />
            {
                user.map(usr => {
                    return (
                        <div key={usr.id}>
                            <h2>{usr.title}</h2>
                            <p>{usr.body}</p>
                            <p>{ }</p>

                        </div>
                    )
                })
            }

        </>
    )
}
export { App }