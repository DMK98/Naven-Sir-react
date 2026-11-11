import  firebase  from "./firebase";
import { getDatabase,ref,push } from 'firebase/database';
const App = () => {
    const handleClick = () => {
        const db = getDatabase();
        const r= ref(db,"students");
        push(r,{roll:1001,name:"amit"});
        push(r,{roll:1002,name:"sumit"});
        push(r,{roll:1003,name:"tmit"});
        push(r,{roll:1004,name:"Dmit"});
        push(r,{roll:1005,name:"Kmit"});
        push(r,{roll:1006,name:"Pmit"});
        console.log("data has been added");
        
    }

    return (
        <>
            <h2>28 Aug | Firebase | Google Authentication | Part 1 & 2</h2>


            <button onClick={handleClick}>CLick Me</button>
        </>
    )
}

export { App }