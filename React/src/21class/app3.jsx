import firebase from "./firebase";
import { getDatabase, ref, push,onValue } from 'firebase/database';
const App = () => {
    const handleClick = () => {
        const db = getDatabase();
        const r = ref(db, "students");
        onValue(r,snapshot=>{
            const data=snapshot.val();
            // console.log(data);
            for(let key in data){
                // console.log(key);
                // console.log(data[key]);
                const row=data[key]
                console.log(row);
                
            }
            
        });

    }

    return (
        <>
            <h2>28 Aug | Firebase | Google Authentication | Part 1 & 2</h2>


            <button onClick={handleClick}>CLick Me</button>
        </>
    )
}

export { App }