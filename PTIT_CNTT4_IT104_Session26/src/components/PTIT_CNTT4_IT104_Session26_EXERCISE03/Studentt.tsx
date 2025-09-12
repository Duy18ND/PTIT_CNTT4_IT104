import React, { useState, type ChangeEvent } from 'react'
import { useSearchParams } from 'react-router-dom';

export default function Studentt() {
    const [studentName, setStudentName] = useState("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStudentName(e.target.value);
    }
    const [searchName, setSearchParamName] = useSearchParams();

    const handleClick = () => {
        setSearchParamName({
            name: studentName,
        });
        console.log(searchName);
        
    }

    return (
        <div>
            Trang học sinh
            <input type="text"
                placeholder='Nhâp từ khóa tìm kiếm'
                onChange={handleChange} />
            <button onClick={handleClick}>Tìm kiếm</button>
        </div>
    )
}
