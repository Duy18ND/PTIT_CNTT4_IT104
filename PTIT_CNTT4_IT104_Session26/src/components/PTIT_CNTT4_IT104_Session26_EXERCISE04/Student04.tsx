import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Student04() {
    const [inputValue, setInputValue] = useState("");
    const [searchName, setSearchName] = useSearchParams();

    useEffect(() => {
        console.log("Name", searchName.get("name"));
    }, [searchName]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const handleClick = () => {
        setSearchName({ name: inputValue });
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Nhập từ khóa tìm kiếm"
                value={inputValue}
                onChange={handleChange}
            />
            <button onClick={handleClick}>Tìm kiếm</button>

            <h1>name: {searchName.get("name")}</h1>
        </div>
    )
}
