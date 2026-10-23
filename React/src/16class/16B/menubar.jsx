import { Link } from "react-router-dom"

const Nav = () => {
    const nm="rajiv"
    return (
        <>
        <hr />
            <Link to="/" >Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {/* <Link to="/about" >About</Link> &nbsp;&nbsp;&nbsp;&nbsp; */}
            <Link to={"/about/+nm"} >About</Link> &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to={"/about/+nm"} >{nm}</Link> &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/about/rahul" >Rahul</Link> &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/feedback" >Feedback</Link>
        <hr />            
        </>
    )
}
export default Nav;
