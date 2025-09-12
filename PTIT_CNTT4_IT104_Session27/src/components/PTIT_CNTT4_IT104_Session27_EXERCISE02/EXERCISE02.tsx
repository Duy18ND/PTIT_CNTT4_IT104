import React from 'react'
import { Outlet } from 'react-router-dom'

export default function EXERCISE02() {
    return (
        <div >
            <div className="text-center text-white bg-blue-500">
                <h1 className='text-4xl font-medium p-5'>Trang chi tiet san pham</h1>
                <div className='text-2xl pb-5'>Danh sach san pham</div>
            </div>

            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}
