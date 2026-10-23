import { useParams, useNavigate, useLocation } from "react-router-dom";
const About = () => {
    const nav = useNavigate();
    const{uname}=useParams();
    const{pathname}=useLocation();

    return (
        <>
            <h3>About {uname}</h3>
            <p>this is about component</p>
            <p>this is <b>{uname}</b></p>
            <p>Path Name :{pathname}</p>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci officia facilis quidem esse nesciunt qui distinctio laborum temporibus quisquam. Adipisci.</p>
            <button onClick={() => nav("/feedback")}>go to feedback</button>
        </>
    )
}
export { About }