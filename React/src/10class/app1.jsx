import { useState, useEffect } from "react"
const App1 = () => {
    const [dt, setDt] = useState(new Date());
    useEffect(() => {
        const clock = setInterval(() => {
            console.log("Running.....");

            setDt(new Date())
        }, 1000);

        return () => {
            console.log("UNMOUNT");
            clearInterval(clock)

        }


    }, []);


    return (
        <>
            <h2>App1 Component</h2>
            <p>
                time is:{dt.toLocaleTimeString()}
            </p>
        </>
    );


}
export { App1 }