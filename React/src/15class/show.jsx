import { MyContext } from "./app";
import { useContext } from "react";
import "./show.css"
const Show = () => {
    const { state } = useContext(MyContext);
    console.log(state.users);


    return (
        <>
        <h3>Show page</h3>
        {
            state.users.map((row,i)=>{
                return(
                    <div key={i} className="box">
                        <p>name:{row.name}</p>

                    </div>
                )
            })
        }
        </>
    )
}

export { Show }