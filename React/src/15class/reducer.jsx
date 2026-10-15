export const is = {
    fruit: "apple", country: "india",
    users: [
        // { roll: 21, name: "Rohit", age: 21, email: "mani@gmail.com" },
        // { roll: 21, name: "Sumit", age: 21, email: "mani@gmail.com" },
        // { roll: 21, name: "Kumar", age: 21, email: "mani@gmail.com" },
        // { roll: 21, name: "Vijay", age: 21, email: "mani@gmail.com" },
        // { roll: 21, name: "Rajeev", age: 21, email: "mani@gmail.com" },
    ]
};
export const reducer = (state, action) => {
    switch (action.type) {
        case "add": const arr=[...state.users];
        arr.push(action.payload);
        return{...state,users:arr}

        case "del": console.log("from del>", action.payload);
            const rcds = [...state.users];
            rcds.splice(action.payload, 1);
            state.users.splice(action.payload, 1)
            return { ...state, users: rcds };

        case "reset": return is;

        default: return state;
    }
}