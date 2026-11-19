import firebase from "./firebase"
import { getDatabase,ref,push, child,remove } from "firebase/database"
const App=()=>{
    const handleClick=()=>{
        const db=getDatabase();
        const r=ref(db,"students");
         push(r, { name: "manish", roll: 21 });
         push(r,{name:"rahul", roll:"22"});
         push(r,{name:"Danish", place:"noida", roll:31});
         remove(child(r,"-P6n5dx8jBdx-tDBklCQ"))
         remove(child(r,"-P6n5dx8jBdx-tDBklCP"))
         remove(child(r,"-P6n5dx8jBdx-tDBklCO"))
         remove(child(r,"-P6n5dNQR0gOP7ko9qrg"))
         remove(child(r,"-P6n5dNP407dGsvGdfEQ"))
         remove(child(r,"-P6n5dx8jBdx-tDBklCQ"))
         remove(child(r,"-P6n5dNP407dGsvGdfEP"))

        console.log("database created");
        
    }
    return(
        <>
        <h2> 28 Aug | Firebase database| Google Authentication | Part 1 & 2</h2>
        <button onClick={handleClick}>Click Me </button>
        </>
    )
}

export {App}