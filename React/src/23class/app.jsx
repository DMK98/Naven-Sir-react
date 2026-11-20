import axios from "axios";
const App = () => {
    const handleClick = () => {
        const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pbHNvbkBlbWFpbC5jb20iLCJwYXNzd29yZCI6Im5pbHNvbiIsImlhdCI6MTc5NTE2Njk3MiwiZXhwIjoxNzk1MTcwNTcyfQ.RIyKYpR2Lts45C9NkOBpHbr6kr3Klzc4QgkIXlvTRSga"
        const instance = axios.create({
            baseURL: 'http://localhost:8000',
            timeout: 1000,
            headers: { 'authorization': `Bearer ${token}` },
        });
        instance.get('/products', {
            email: 'nilson@email.com',
            password: 'nilson',
        }).then(response => {
            console.log(response.data.access_token);

        }).catch(error => {
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