import React, { Component } from 'react'

export default class EXERCISE05 extends Component {
    render() {
        return (
            <div className='container05'>
                <main>
                    <div className="header05">
                        <h2>Quản lý sinh viên</h2>
                        <div>
                            <button>Thêm mới sinh viên</button>
                        </div>
                    </div>

                    <div className='search'>
                        <select name="" id="">
                            <option value="">Sắp xếp theo độ tuổi</option>
                            <option value="">1</option>
                            <option value="">2</option>
                        </select>
                        <div>
                            <input type="text" placeholder='tìm kiếm từ khóa theo tên hoặc email' />
                        </div>
                    </div>

                    <table border={1} cellSpacing={0}>
                        <thead>
                            <th>STT</th>
                            <th>Tên sinh viên</th>
                            <th>Ngày sinh</th>
                            <th>Email</th>
                            <th>Trạng thái</th>
                            <th>Chức năng</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>SV001</td>
                                <td>Đoàn Mạnh Duy</td>
                                <td>28/07/2006</td>
                                <td>Duy@gmail.com</td>
                                <td><div className='onActive'>Đang hoạt động</div></td>
                                <td>
                                    <button className='block'>Chặn</button>
                                    <button className='edit'>Sửa</button>
                                    <button className='delete'>Xóa</button>
                                </td>
                            </tr>

                            <tr>
                                <td>SV001</td>
                                <td>Đoàn Mạnh Duy</td>
                                <td>28/07/2006</td>
                                <td>Duy@gmail.com</td>
                                <td><div className='offActive'>Ngừng hoạt động</div></td>
                                <td>
                                    <button className='block'>Chặn</button>
                                    <button className='edit'>Sửa</button>
                                    <button className='delete'>Xóa</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='footer'>
                        <button><i className="fa-solid fa-arrow-left"></i></button>

                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>

                        <button><i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </main>
            </div>
        )
    }
}
