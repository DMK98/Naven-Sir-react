import axios from "axios";
const App = () => {
    const handleClick = () => {
        axios.post('http://localhost:8000/auth/login', {
            email: 'nilson@email.com',
            password: 'nilson',
        }).then(response=>{
            console.log(response.data.access_token);
            
        }).catch(error=>{
            console.log(error);
            
        });
       
    }
    return (
        <>
            <h2> 30 Aug | JWT | Part 1 & 2 </h2>
            <button onClick={handleClick}>CLick me</button>
        </>
    )
}
export { App }