const initialRandom = {
    random: ""
}

export const randomReducer = (state = initialRandom, action: any) => {
    switch(action.type){
        case "RANDOM":
            return {...state, random: Math.floor(Math.random() * 99999999)};
        default: 
            return state
    }
}