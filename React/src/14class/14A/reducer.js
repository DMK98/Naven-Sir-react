const is={roll:100,name:"manish"};
const reducer=(state,action)=>{
    switch(action.type){
        case "update": return {roll:action.payload.r,name:action.payload.nm}
        case "reset": return is
    }
}

export {is,reducer}