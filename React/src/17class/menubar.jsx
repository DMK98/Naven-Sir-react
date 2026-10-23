import { Link } from "react-router-dom"
const Nav = () => {
    const nm="Manish";
    const isLogged=true;

    return (
        <>
            <Link to="/" >Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/about">About</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/about/rahul">Rahul</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            {
                isLogged?
                <><Link to={"/about/"+nm}>{nm}</Link>&nbsp;&nbsp;&nbsp;&nbsp;</>:null
            }
            <Link to="/feedback" >Feedback</Link>
        </>
    )
}
export {Nav}