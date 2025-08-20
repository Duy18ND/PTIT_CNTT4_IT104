import React from 'react'

export default function EXERCISE08() {
  return (
   <div className='container08'>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và Tên</th>
            <th>Ngày sinh</th>
            <th>Giới tính</th>
            <th>Địa chỉ</th>
            <th>Hành động</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Đoàn Mạnh Duy</td>
            <td>28/07/2006</td>
            <td>Nam</td>
            <td>Nam Định</td>
            <td>
                <button>Sửa</button>
                <button>Xóa</button>
            </td>
          </tr>
          
          <tr>
            <td>2</td>
            <td>Đoàn Mạnh Duy</td>
            <td>28/07/2006</td>
            <td>Nam</td>
            <td>Nam Định</td>
            <td>
                <button>Sửa</button>
                <button>Xóa</button>
            </td>
          </tr>
        </tbody>

      </table>
      <div className='footer08'></div>
    </div>
  )
}