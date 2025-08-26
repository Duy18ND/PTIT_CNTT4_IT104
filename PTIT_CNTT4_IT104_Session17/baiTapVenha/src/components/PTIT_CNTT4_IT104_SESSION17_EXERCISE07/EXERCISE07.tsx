import React, { useState } from 'react'

export default function EXERCISE07() {
    const [selectValue, setSelect] = useState("");
    const handleChange = (e) => {
        setSelect(e.target.value);
    }
    return (
        <div>
            <h2>Thành phố : {selectValue}</h2>
            <select value={selectValue} onChange={handleChange}>
                <option value="">Mời bạn lựa chọn</option>
                <option value= "Hà nội">hà nội</option>
                <option value= "Hải phòng">hải phòng</option>
                <option value= "Nam định">Nam định</option>
                <option value= "Quảng ninh">Quảng ninh</option>
            </select>
        </div>
    )
}
