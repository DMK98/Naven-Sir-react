import ReactDom, { createRoot } from "react-dom/client";
// import App from "./app";
import App1 from "./app1";
const root = createRoot(document.getElementById("root"));
// import { Student } from "./student";
// import Stu from "./student.jsx"; 
/*const Student = () => {
    return (
        <div>
            <h3>Student component</h3>
            <p>some text goes here</p>
        </div>
    );
}*/

// const root = createRoot(document.getElementById("root"));
// root.render(<Student/>)
// root.render(<Stu/>)
// const name = "kunal"
// const element = <div>some text goes here Name is :{name} 

/*const add=(fn,sn)=>{
        return fn+sn;
}
const element =
    (<div>
        some text goes <br />
        here Name is :{name} <hr />
        result is : {add(20,30)}
    </div>);
root.render(element)
*/

// root.render(<App/>)
root.render(<App1/>)

