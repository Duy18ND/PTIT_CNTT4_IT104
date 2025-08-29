import React, { useEffect, useState } from 'react'

export default function EXERCISE05() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const countNew = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);
        return () => {
            clearInterval(countNew);
            console.log("Timer đã dừng khi component unmount");
        }
    }, []);
    return (
        <div>
            <h2>Thời gian: {count}s</h2>
        </div>
    )
}
