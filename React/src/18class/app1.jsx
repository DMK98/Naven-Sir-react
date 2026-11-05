const App = () => {
    const handleClick = () => {
        async function getData() {
            const url = "https://randomuser.me/api/";
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }

                const result = await response.json();
                const user=result.results[0];
                console.log(user);
                console.log(user.name.first,user.name.last);
                console.log(user.gender);
                console.log(user.dob.age);
                console.log(user.email);
                console.log(user.cell);
                console.log(user.phone);
                console.log(user.picture.large);
            } catch (error) {
                console.error(error.message);
            }
        }
        getData();
        
        
    }
    return (
        <>
            <h3>16 Aug | Consume API using fetch | Part 1 & 2 </h3>
            <button onClick={handleClick}>CLick me</button>
        </>
    )
}
export { App }