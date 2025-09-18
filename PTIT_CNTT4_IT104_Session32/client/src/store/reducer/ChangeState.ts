const initialChangeState = {
    name: "Hello World!"
}

export const changeStateReducer = (state = initialChangeState, action: any) => {
    switch(action.type){
        case "CHANGE":
            return {...state, name: state.name === "Hello World!" ? "Bye Bye!" :  "Hello World!"}
        default: 
            return state;
    }
}