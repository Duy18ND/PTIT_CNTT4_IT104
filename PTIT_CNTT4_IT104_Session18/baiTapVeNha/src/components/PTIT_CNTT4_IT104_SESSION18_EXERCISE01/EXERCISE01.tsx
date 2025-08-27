import React, { useReducer } from 'react'
type State = {
    count: number
}
type Action = { type: "INCREASE" };

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "INCREASE":
            return { count: state.count + 1 };
        default:
            return state;
    }
};
export default function EXERCISE01() {
    const initialState: State = { count: 0 };

    const [state, dispatch] = useReducer(reducer,initialState);

    return (
        <div>
            <h2>Count: {state.count}</h2>
            <button onClick={() => dispatch({type: "INCREASE"})}>Click</button>
        </div>
    )
}
