import firebase from "./firebase";
import { getDatabase, ref, push,onValue,child,update } from 'firebase/database';
const App = () => {
    const handleClick = () => {
        const db = getDatabase();
        const r = ref(db, "students");
        update(child(r,"-P69168qKgLEpAadYZIr"),{name:"Rohit kapoor", place:"delhi" });
        console.log("data has been updated");
        
        

    }

    return (
        <>
            <h2>28 Aug | Firebase | Google Authentication | Part 1 & 2</h2>


            <button onClick={handleClick}>CLick Me</button>
        </>
    )
}

export { App }