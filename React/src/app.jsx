import Student from "./student";
const App=()=>{
    return(
        <div>
            <h3>APP Component</h3>
            <hr />
            <Student roll={21} name="manish" />
            <Student roll={21}  />
            <Student />
        </div>
    )
}

export default App;