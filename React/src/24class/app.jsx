import { useRef } from "react";
import "./style.css"
const App = () => {
    const forName = useRef();
    const forAge = useRef();
    const forEmail = useRef();
    const forFile =useRef()

    const handleSave = (e) => {
        e.preventDefault()
        console.log("Name:", forName.current.value);
        console.log("Age:", forAge.current.value);
        console.log("Email:", forEmail.current.value);
        console.log("File:", forFile.current.value);
        console.log(forName.current);
        console.log(forName.current.value);

        forName.current.value = "";
        forAge.current.value = "";
        forEmail.current.value = "";
        forName.current.focus();

    }


    return (
        <>
            <h3>2 Sep | Forms | Forms Validation | Part 1 & 2</h3>
            <form onSubmit={handleSave}>
                name: <input type="text" ref={forName} /> <br />
                Age: <input type="number" ref={forAge} /> <br />
                Email: <input type="email" ref={forEmail} />  <br />
                Select Any file : <input type="file" ref={forFile} /> <br />
                <input type="submit" value="save" />
            </form>



        </>

    )
}

export { App }
// 9:29