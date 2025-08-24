import React, { Component } from "react";

type User = {
    id: string;
    name: string;
    date: string;
    email: string;
    isStatus: boolean;
};

type StudentList = {
    student: User[];
    isOpenForm: boolean;
    newStudent: { id: string; name: string; date: string; email: string };
    isBlockPopup: boolean;
    studentToToggle: User | null;
    isDeletePopup: boolean;
    currentPage: number;
    perPage: number;
};

export default class EXERCISE05 extends Component<object, StudentList> {
    constructor(props: object) {
        super(props);
        this.state = {
            student: [],
            isOpenForm: false,
            newStudent: { id: "", name: "", date: "", email: "" },
            isBlockPopup: false,
            studentToToggle: null,
            isDeletePopup: false,
            currentPage: 1,
            perPage: 5
        };
    }

    componentDidMount() {
        const data = localStorage.getItem("students");
        if (data) this.setState({ student: JSON.parse(data) });
    }

    handleOpenForm = () => this.setState({ isOpenForm: true });

    handleCloseForm = () => this.setState({
        isOpenForm: false,
        newStudent: { id: "", name: "", date: "", email: "" },
    });

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState(prev => ({
            newStudent: { ...prev.newStudent, [name]: value },
        }));
    };

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { id, name, date, email } = this.state.newStudent;
        const { student } = this.state;

        if (!id || !name || !email) {
            alert("Mã sinh viên, Tên và Email không được để trống!");
            return;
        }
        if (student.some(s => s.id === id)) {
            alert("Mã sinh viên đã tồn tại!");
            return;
        }
        if (student.some(s => s.email === email)) {
            alert("Email đã tồn tại!");
            return;
        }

        const newUser: User = { ...this.state.newStudent, isStatus: true };
        this.setState(prev => {
            const updatedStudents = [...prev.student, newUser];
            localStorage.setItem("students", JSON.stringify(updatedStudents));
            alert("Thêm tài khoản thành công!");
            return {
                student: updatedStudents,
                isOpenForm: false,
                newStudent: { id: "", name: "", date: "", email: "" },
            };
        });
    };

    // Block / Hủy Block=
    openTogglePopup = (student: User) => this.setState({ isBlockPopup: true, studentToToggle: student });
    closeTogglePopup = () => this.setState({ isBlockPopup: false, studentToToggle: null });

    handleToggleStatus = () => {
        this.setState(prev => {
            const updatedStudents = prev.student.map(s =>
                s.id === prev.studentToToggle?.id ? { ...s, isStatus: !s.isStatus } : s
            );
            localStorage.setItem("students", JSON.stringify(updatedStudents));
            return { student: updatedStudents, isBlockPopup: false, studentToToggle: null };
        });
    };

    //Delete 
    openDeletePopup = (student: User) => this.setState({ isDeletePopup: true, studentToToggle: student });
    closeDeletePopup = () => this.setState({ isDeletePopup: false, studentToToggle: null });

    handleDeleteStudent = () => {
        this.setState(prev => {
            const updatedStudents = prev.student.filter(s => s.id !== prev.studentToToggle?.id);
            localStorage.setItem("students", JSON.stringify(updatedStudents));
            return { student: updatedStudents, isDeletePopup: false, studentToToggle: null };
        });
    };

    // Pagination
    handlePageChange = (page: number) => this.setState({ currentPage: page });

    formatDate = (dateStr: string) => {
        const d = new Date(dateStr);
        return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth()+1).padStart(2,"0")}/${d.getFullYear()}`;
    }

   renderPagination = () => {
    const { student, currentPage, perPage } = this.state;
    const totalPages = Math.ceil(student.length / perPage);
    if (totalPages <= 1) return null;
    const pages = [];
    for (let i = 1; i <= totalPages; i++) pages.push(i);

    return (
        <div className="pagination">
            {pages.map(p => (
                <button
                    key={p}
                    onClick={() => this.handlePageChange(p)}
                    className={currentPage === p ? "active" : ""}
                >
                    {p}
                </button>
            ))}
        </div>
    );
}


    render() {
        const { student, currentPage, perPage } = this.state;
        const indexOfLast = currentPage * perPage;
        const indexOfFirst = indexOfLast - perPage;
        const currentStudents = student.slice(indexOfFirst, indexOfLast);

        return (
            <>
                <div className="container05">
                    <main>
                        <div className="header05">
                            <h2>Quản lý sinh viên</h2>
                            <div>
                                <button onClick={this.handleOpenForm}>Thêm mới sinh viên</button>
                            </div>
                        </div>

                        <table border={1} cellSpacing={0}>
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên sinh viên</th>
                                    <th>Ngày sinh</th>
                                    <th>Email</th>
                                    <th>Trạng thái</th>
                                    <th>Chức năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentStudents.map((s) => (
                                    <tr key={s.id}>
                                        <td>{s.id}</td>
                                        <td>{s.name}</td>
                                        <td>{this.formatDate(s.date)}</td>
                                        <td>{s.email}</td>
                                        <td>
                                            <div className={s.isStatus ? "onActive" : "offActive"}>
                                                {s.isStatus ? "Đang hoạt động" : "Ngừng hoạt động"}
                                            </div>
                                        </td>
                                        <td>
                                            <button className="block" onClick={() => this.openTogglePopup(s)}>
                                                {s.isStatus ? "Chặn" : "Hủy chặn"}
                                            </button>
                                            <button className="edit">Sửa</button>
                                            <button className="delete" onClick={() => this.openDeletePopup(s)}>Xóa</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {this.renderPagination()}
                    </main>
                </div>

                {/* Form Thêm */}
                {this.state.isOpenForm && (
                    <>
                        <div className="overlay" onClick={this.handleCloseForm}></div>
                        <div className="containerAddStudent">
                            <div className="addStudent10">
                                <h2>Thêm sinh viên mới</h2>
                                <form className="form10" onSubmit={this.handleSubmit}>
                                    <label>Mã sinh viên</label>
                                    <input type="text" name="id" value={this.state.newStudent.id} onChange={this.handleChange}/>
                                    <label>Tên sinh viên</label>
                                    <input type="text" name="name" value={this.state.newStudent.name} onChange={this.handleChange}/>
                                    <label>Ngày sinh</label>
                                    <input type="date" name="date" value={this.state.newStudent.date} onChange={this.handleChange}/>
                                    <label>Email</label>
                                    <input type="email" name="email" value={this.state.newStudent.email} onChange={this.handleChange}/>
                                    <div className="btn10">
                                        <button type="button" className="cancel" onClick={this.handleCloseForm}>Hủy</button>
                                        <button type="submit" className="add">Thêm mới</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </>
                )}

                {/* Block / Hủy block */}
                {this.state.isBlockPopup && (
                    <>
                        <div className="overlay" onClick={this.closeTogglePopup}></div>
                        <div className="containerStatus">
                            <div className="containerBlock">
                                <h2>Xác nhận!</h2>
                                <div className="title10">
                                    <i className="fa-solid fa-circle-exclamation"></i>
                                    <p>Bạn có chắc chắn muốn {this.state.studentToToggle?.isStatus ? "chặn" : "hủy chặn"} sinh viên {this.state.studentToToggle?.name} không?</p>
                                </div>
                                <hr/>
                                <div className="btnStatus">
                                    <button className="cancelStatus" onClick={this.closeTogglePopup}>Hủy</button>
                                    <button className="blockStatus" onClick={this.handleToggleStatus}>{this.state.studentToToggle?.isStatus ? "Chặn" : "Hủy chặn"}</button>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* Xóa */}
                {this.state.isDeletePopup && (
                    <>
                        <div className="overlay" onClick={this.closeDeletePopup}></div>
                        <div className="containerStatus">
                            <div className="containerBlock">
                                <h2>Xác nhận!</h2>
                                <div className="title10">
                                    <i className="fa-solid fa-circle-exclamation"></i>
                                    <p>Bạn có chắc chắn muốn xóa sinh viên {this.state.studentToToggle?.name} không?</p>
                                </div>
                                <hr/>
                                <div className="btnStatus">
                                    <button className="cancelStatus" onClick={this.closeDeletePopup}>Hủy</button>
                                    <button className="blockStatus" onClick={this.handleDeleteStudent}>Xóa</button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </>
        );
    }
}
