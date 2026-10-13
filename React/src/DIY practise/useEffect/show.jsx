import { useState } from "react";
import { MyContext } from "./app";
import { useContext } from "react";
const Show = () => {
    const { data, handleUpdate, reset } = useContext(MyContext);

    return (
        <>
            <h3>Show component</h3>
            <p>some text from APP component</p>
            <p>ROll:{data.roll}</p>
            <p>NAME:{data.name}</p>
            <button onClick={handleUpdate}>updateFromApp</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}

export { Show }