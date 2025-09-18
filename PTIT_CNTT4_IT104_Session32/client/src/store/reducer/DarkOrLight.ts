const initialDarkOrLight = {
    bg: "#ffffff"
}

export const darkOrLightReducer  = (state = initialDarkOrLight, action: any) => {
    switch(action.type){
        case "TOGGLE":
            return {
                ...state,
                bg: state.bg === "#ffffff" ? "#000000" : "#ffffff"
            }
        default:
            return state;
    }
}