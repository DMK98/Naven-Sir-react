import { useReducer } from "react"


const is={count:0}
const reducer=(state,action)=>{
    return state
}



const Diy13=()=>{

    const[state,disapatch]=useReducer(useReducer,{count:0});
    console.log("BEFORE RETRUN",state);

    return(
        <>
        <p>practice use reducer</p>
        <p>{state.count}</p>
        </>
    )
}

export{Diy13}