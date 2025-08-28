import React, { useRef, useState } from 'react'

export default function EXERCISE03() {
    const [input, setInput] = useState('');
    const ref = useRef(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        ref.current++;
    }

    return (
        <div>
            <input type="text" placeholder='Nhập vào đây' onChange={handleChange} value={input}/>
            <p>Componentđã  render: {ref.current} lần</p>
        </div>
    )
}
