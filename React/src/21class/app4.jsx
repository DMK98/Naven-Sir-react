import firebase from "./firebase";
import { getDatabase, ref, push, onValue, child, update } from 'firebase/database';
const App = () => {
    const handleClick = () => {
        const db = getDatabase();
        const r = ref(db, "students");
        remove(child(r, "-P69MWRglGfkKn8Mx4cD"));
        console.log("data has been deleted");


        return (
            <>
                <h2>28 Aug | Firebase | Google Authentication | Part 1 & 2</h2>


                <button onClick={handleClick}>CLick Me</button>
            </>
        )
    }

    export { App }