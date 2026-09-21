import Student from "./student";
const App = () => {
    // console.log();
    // const obj = { roll: 101, name: "Rahul" };
    // const cnt = "india"
    /*const handleClick=()=>{
        console.log("handleClick");        
    }*/

    /*const handleClick = (e) => {
        console.log(e.target.value);
        console.log(e.target.name);
        console.log("", e.target.id);
        if(e.target.value==="insert"){
            console.log("insert logic");            
        }else{
            console.log("delete logic");
            
        }
    }*/

    /*const handleDelete = () => {
        console.log("delete logic");
    }*/

    const handleClick = (e, no=0) => {
        // console.log("type",e.target.type);
        // console.log("Value",e.target.value);
        // console.log("name",e.target.name);
        // console.log("id",e.target.id);
        // console.log(ev);
        console.log(no);
        
        
        
    }

    return (
        <>
            <h3>APP Component</h3>
            <hr />
            {/* <Student roll={21} name="manish" > */}
            {/* <Student country={cnt} stu={obj} >
                <strong>first </strong>line goes here <br />
                <em>Last </em> line goes here
            </Student> */}

            {/* <Student roll={22} name="ANISH" />
            <Student roll={23}  /> */}
            {/* <Student /> */}

            {/* <input type="button" value="click me" onClick={handleClick}/> */}
            {/* <input type="button" value="insert" name="insert" id="insert" onClick={(ev) => handleClick(ev,8000)} />
            <input type="button" value="delete" name="delete" id="delete" onClick={handleClick} /> */}
             <input type="button" value="insert" name="delete" id="delete" onClick={(ev)=>handleClick(ev,8000)} />
              <input type="button" value="update" name="update" id="update" onClick={(ev)=>handleClick(ev,5000)} />
               <input type="button" value="delete" name="delete" id="delete" onClick={()=>handleClick()} />
               <input type="button" value="reset" name="reset" id="reset" onClick={handleClick} />
            <hr />
        </>
    )
}

export default App;