import React, { useState, useEffect } from "react";
import './EXERCISE06.css'
export default function KeyDisplay() {
    const [key, setKey] = useState<string>("");

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            setKey(e.key.toLocaleUpperCase());
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);
    return (
        <div>
            <h2>Phím bạn vừa nhấn: </h2>
            <div className='container06'>
                    <h1>[{key}]</h1>
            </div>
        </div>
    )
}
