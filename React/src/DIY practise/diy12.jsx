import { useState, useEffect } from "react"

const Diy12 = () => {
    const [output,setOutput]=useState();
    const [text, setText] = useState("");
    const [limit, setLimit] = useState("");
    const handleTextarea = (e) => {
        setText(e.target.value);
    }

    useEffect(() => {
        setOutput(text.length)
        if (text.length>=20) {
            setLimit("Limit reached"); 
                       
            return;
        }else{
            setLimit("you can continue");
        }

    }, [text])
    const clear=()=>{
        setText("")
        setLimit(""); 
    }

    return (
        <>
            <p>React Practice Task — Live Character Counter <br />
                Build a Character Counter using useState + useEffect.</p>
            <label htmlFor="textArea">Enter your message...</label>
            <textarea name="textArea" onChange={handleTextarea} value={text} ></textarea>
            <p>{output}</p>
            <p>{limit}</p>
            <button onClick={clear}>clear</button>
        </>
    )
}

export { Diy12 }