import React, { useReducer, useState} from 'react'
export default function EXERCISE07() {
    const reducer = (state: string[], action: { type: string, payload: string | number}): string[] => {
        switch (action.type) {
            case "ADD":
                return [...state, action.payload as string];

            case "DELETE":
                console.log("Hello");
                return state.filter((item, index) => index !== action.payload);
            default:
                return state;
        }
    }
        const [state, dispatch] = useReducer(reducer, []);
        const [input, setInput] = useState("");
        const handleChange = ((e: React.ChangeEvent<HTMLInputElement>) => {
            setInput(e.target.value);
        });
        const handleClick = () => {
            if(input.trim() === "") return;
            dispatch({type: "ADD", payload: input});
            setInput("");
        }
        const handleDelete = (index: number) => {
            dispatch({type: "DELETE", payload: index});
        }
    return (

        <div>
            <input type="text" onChange={handleChange} value={input}/>
            <button onClick={handleClick}>Thêm</button>
            <ul>
                {state.map((item, index) => (
                    <li key={index}>{item} <button onClick={() => handleDelete(index)}>Xóa</button></li>
                ))}
            </ul>
        </div>
    )
}
