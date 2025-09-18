const initialCouter = {
    count: 0
}

export const couterReducer = (state = initialCouter, action: any) => {
    switch(action.type){
        case "INCREASE":
            state.count = state.count + 1;
            return {...state};
        case "REDUCE":
             state.count = state.count - 1;
            return {...state};
        default: 
            return state;
    }
}