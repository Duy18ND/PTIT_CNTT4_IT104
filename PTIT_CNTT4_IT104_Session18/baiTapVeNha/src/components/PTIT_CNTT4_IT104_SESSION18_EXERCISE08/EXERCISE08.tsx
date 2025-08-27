import React, { useReducer, useState } from 'react'
const reducer = (state: string[], action: { type: string, payload: string | number }): string[] => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload as string];

        case "DELETE":
            return state.filter((item, index) => index !== action.payload);

        default:
            return state;
    }
}
export default function EXERCISE08() {
    const [state, dispatch] = useReducer(reducer, []);
    const [input, setInput] = useState("");

    const handleInput = ((e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    });
    const handleADD = () => {
        if (input.trim() === "") alert("Input công việc trống!");
        dispatch({ type: "ADD", payload: input });
        setInput("");
    }
    const handleDelete = (index: number) => {
        if (state[index] !== undefined && confirm("Bạn có chắc xóa công việc đó không?")) {
            dispatch({ type: "DELETE", payload: index });
        }
    }
    return (
        <div>
            <input type="text" onChange={handleInput} value={input} />
            <button onClick={handleADD}>Thêm</button>
            <ul>
                {state.map((item, index) => (
                    <li key={index}>{item} <button onClick={() => handleDelete(index)}>Xóa</button></li>
                ))}
            </ul>
        </div>
    )
}
