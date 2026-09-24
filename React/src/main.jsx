import ReactDom from "react-dom/client";

const root = ReactDom.createRoot(document.getElementById("root"));
// import App from "./app";
// import { Student } from "./student";
// import Stu from "./student.jsx"; 

// import { App } from "./6class/app";
// import { Diy3 } from "./DIY practise/diy3";
import { App } from "./6class/app";
import { App2 } from "./6class/app2";

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

// root.render(<App/>)
root.render(<App2/>)
// root.render(<Diy3/>)