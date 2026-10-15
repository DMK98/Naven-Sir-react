import { MyContext } from "./app";
import { useContext } from "react";
import "./show.css"
const Show = () => {
    const { state, dispatch } = useContext(MyContext);
    console.log(state.users);


    return (
        <>
            <h3>Show page</h3>
            Fruit:{state.fruit} <br />
            country:{state.country}

            {
                state.users.map((row, i) => {
                    return (
                        <div key={i} className="box">
                            <p>Roll:{row.roll}</p>
                            <p>Name:{row.name}</p>
                            <p>Age:{row.age}</p>
                            <p>Email:{row.email}</p>
                            <button onClick={() => dispatch({ type: "del", payload: i })} >X</button>
                        </div>
                    )
                })
            }
        </>
    )
}

export { Show }