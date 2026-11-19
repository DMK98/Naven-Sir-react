import firebase from "./firebase";
import { getDatabase, ref, push } from "firebase/database";

const App = () => {
    const handleClick = () => {
        const db = getDatabase();
        const r = ref(db, "students");
        push(r, { name: "manish", roll: 21 });
        push(r, { name: "Anish", roll: 22 });
        push(r, { name: "Danish", roll: 23 });
        console.log("data has been added");

    }
    return (
        <>
            <h2> 30 Aug |  1 JWT 1 2| Part 1 & 2</h2>
            <button onClick={handleClick}>Click here</button>
        </>
    )
}

export { App }