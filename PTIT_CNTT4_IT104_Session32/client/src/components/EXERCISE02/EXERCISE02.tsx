import React from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
export default function EXERCISE02() {
    const listUser = useSelector((data: any) => data.EXERCISE02.ListUser);
    return (
        <div style={{ marginTop: "20px" }}>
            <Table border={1} cellPadding={10} style={{ borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên</th>
                        <th>Giới tính</th>
                        <th>Ngày sinh</th>
                        <th>Địa chỉ</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.gender}</td>
                            <td>{item.date}</td>
                            <td>{item.address}</td>
                            <td style={{ display: "flex", gap: "10px", border: "none" }}>
                                <button>Sửa</button>
                                <button>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}
