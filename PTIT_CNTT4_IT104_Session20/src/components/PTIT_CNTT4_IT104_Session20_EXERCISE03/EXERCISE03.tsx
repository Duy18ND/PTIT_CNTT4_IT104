import React, { useEffect } from 'react'

export default function EXERCISE03() {
    useEffect(() => {
        console.log("Component Welcome vừa được render lần đầu!");
    }, []);
    return (
        <div>
            <h2>Chào mừng bạn đến với ứng dụng của chúng tôi</h2>
        </div>
    )
}
