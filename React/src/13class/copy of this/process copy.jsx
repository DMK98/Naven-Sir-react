import { Show } from "./show"
const Process=(props)=>{

    return(
        <>
        <h3>PROCESS Component</h3>
        <p>some data from process</p>
        {props.roll} <br />
        {props.name}
        <hr />
        <Show roll={props.roll} name={props.name}/>
        </>
    )
}
export {Process}
