import React, { Component } from 'react'
type Todo = {
    id: number,
    nameTask: string,
    author: string,
    status: boolean,
    date: Date,
}
type TodoList = {
    todo: Todo[];
}
export default class EXERCISE08 extends Component<object, TodoList> {
    constructor(props: object) {
        super(props);
        this.state = {
            todo: [
                {
                    id: 1,
                    nameTask: "Thiết kết Header",
                    author: "Doan Manh Duy",
                    status: false,
                    date: new Date()
                },
                {
                    id: 2,
                    nameTask: "Thiết kết Section",
                    author: "Tran Ngoc Linh",
                    status: true,
                    date: new Date()
                },
                {
                    id: 2,
                    nameTask: "Thiết kết Footer",
                    author: "Doan Thi Hoai",
                    status: true,
                    date: new Date()
                }
            ]
        }
    }

    render() {
        const { status } = this.props;

        return (
            <div>
                <table cellPadding={8} border={1}>
                    <thead>
                        <th>STT</th>
                        <th>Tên công việc</th>
                        <th>Người thực hiện</th>
                        <th>Trạng thái</th>
                        <th>Thời gian tạo</th>
                        <th>Chức năng</th>
                    </thead>
                    <tbody>
                        {this.state.todo.map((task, index) => (
                            <tr key={task.id}>
                                <td>{index + 1}</td>
                                <td>{task.nameTask}</td>
                                <td>{task.author}</td>
                                <td>
                                    <p className={`status ${task.status ? "active" : "noActive"}`}>
                                        {task.status ? "Hoàn thành" : "Chưa hoàn thành"}
                                    </p>
                                </td>

                                <td>{task.date.toLocaleString()}</td>
                                <td>
                                    <button className='btn1'>Sửa</button>
                                    <button className='btn2'>Xóa</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
