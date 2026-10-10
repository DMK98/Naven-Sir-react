const is = { count: 10 };
/*const reducer=(state,action)=>{
    if (action.type==="inc") {
        return {count:state.count+action.payload};
    }if (action.type==="dec") {
        return {count:state.count-action.payload}
    }if (action.type==="res") {
        return {count:0}
    }  
    return state; 
};*/
const reducer = (state, action) => {
    switch (action.type) {
        case "inc": return { count: state.count + action.payload }; 
        break;           
        case "dec": return { count: state.count - action.payload };           
        break;
        case "res": return { count: 0 };
        break;
        default:state;
    }
}

export { is, reducer }