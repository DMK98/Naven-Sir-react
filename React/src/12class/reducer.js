import * as actions from "./actions.js"

export const is = { count: 0 };
export const reducer = (state, action) => {
    console.log("STATE", state);
    console.log("ACTION", action);

    switch (action.type) {
        case "actions.INC": return { count: state.count + 1 };
        case "actions.DEC ": return { count: state.count + action.payload };
        case "actions.INC_BY_VAL ": return { count: state.count - 1 };
        case "actions.RESET ": return { count: 0 };
        default: return state;
    }
}