import React, { useCallback, useState } from 'react'
export default function EXERCISE04() {
    const [color, setColor] = useState<string>("");
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
    }, [setColor]);
    return (
        <div>
            <input type="color" onChange={handleChange} />
            <div style={{ backgroundColor: color, width: "250px", height: "250px"}}></div>
        </div>
    )
}
