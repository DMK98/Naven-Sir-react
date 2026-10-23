import { useParams,useNavigate,useLocation } from "react-router-dom"
const About = () => {
    const nav=useNavigate();
    const{uname}=useParams(); 
    const {pathName}=useLocation()
    return (
        <>
            <h3>About component</h3>
            <h3>About {uname}</h3>
            <p>all details of {uname}</p>
            <p>{pathName}</p>
            <p>React | 12 July | Doubts | Routing continues | Part 2</p>
            <p>this is about component</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci officia facilis quidem esse nesciunt qui distinctio laborum temporibus quisquam. Adipisci.</p>
        </>
    )
}
export {About}