import React, { useState, useRef, useEffect } from 'react'
import './EXERCISE06.css'
export default function EXERCISE06() {
    const [isOpen, setIsOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);
    return (
        <div className='container06'>
            <div className='container_Child06'>
                <h2>Ứng dụng React với Modal và Focus Input</h2>
                <div className="btn06">
                    <button onClick={() => setIsOpen(true)}>Mở Modal</button>
                </div>
                {isOpen && (
                    <div className='Form_Login'>
                        <div className='Form_Login_Child'>
                            <h2>Đăng nhập</h2>
                            <input type="text" />
                            <div>
                                <button onClick={() => setIsOpen(false)}>Đóng</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
