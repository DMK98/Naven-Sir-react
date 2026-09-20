const address="noida sector 15"
const display=()=>{
    console.log("display");    
}
const show=()=>{
    console.log("from show");    
    display();    
}
// const display=()=>{
//     console.log(display);    
// }
// export {address,show};
// export {show};

const showRecord=()=>{
    console.log("from show record");   
}
export default showRecord;