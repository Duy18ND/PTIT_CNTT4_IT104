import React, { useEffect, useState } from 'react'
import './ListPost.css'
import { Table, Button, Form, Modal } from 'react-bootstrap'
import axios from 'axios'

type Post = {
    id?: number
    title: string
    image: string
    content: string
    date: string
    status: boolean
}

export default function ListPost() {
    const [post, setPost] = useState<Post[]>([])
    const [inputValue, setInputValue] = useState<Post>({
        title: "",
        image: "",
        content: "",
        date: "",
        status: false,
    })
    const [show, setShow] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const [selectedPost, setSelectedPost] = useState<Post | null>(null)
    const [isEditing, setIsEditing] = useState(false)

    //Search
    const [search, setSearch] = useState<string>("");

    //Lọc  
    const [filterStatus, setFilterStatus] = useState("")

    // Toggle add
    const handleClose = () => {
        setShow(false)
        setIsEditing(false)
        setInputValue({ title: "", image: "", content: "", date: "", status: false })
    }
    const handleShow = () => setShow(true)

    // Toggle confirm
    const handleConfirmClose = () => setShowConfirm(false)
    const handleConfirmShow = (post: Post) => {
        setSelectedPost(post)
        setShowConfirm(true)
    }

    // Get Data
    async function getAllPost() {
        const response = await axios.get("http://localhost:8080/post")
        setPost(response.data)
    }
    useEffect(() => {
        getAllPost()
    }, [])

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type, files } = e.target as HTMLInputElement
        if (type === "file" && files) {
            setInputValue((prev) => ({
                ...prev,
                [name]: URL.createObjectURL(files[0]),
            }))
        } else if (name === "status") {
            setInputValue((prev) => ({
                ...prev,
                status: value === "1" ? true : false,
            }))
        } else {
            setInputValue((prev) => ({
                ...prev,
                [name]: value,
            }))
        }
    }

    // Handle Submit (Thêm + Sửa)
    const handleSubmit = async () => {
        if (
            inputValue.title.trim() === "" ||
            inputValue.image.trim() === "" ||
            inputValue.content.trim() === "" ||
            inputValue.date.trim() === ""
        ) {
            return alert("Dữ liệu trống!. Vui lòng kiểm tra lại thông tin!")
        }

        try {
            if (isEditing && inputValue.id) {
                // --- SỬA ---
                await axios.put(`http://localhost:8080/post/${inputValue.id}`, inputValue)
            } else {
                // --- THÊM ---
                const newPost: Post = {
                    title: inputValue.title,
                    image: inputValue.image,
                    content: inputValue.content,
                    date: inputValue.date || new Date().toISOString().slice(0, 10),
                    status: inputValue.status
                }
                await axios.post("http://localhost:8080/post", newPost)
            }

            getAllPost()
            handleClose()
        } catch (error) {
            console.error("Lỗi khi lưu bài viết:", error)
        }
    }

    // Confirm block
    const handleBlock = async () => {
        if (!selectedPost) return
        try {
            await axios.patch(`http://localhost:8080/post/${selectedPost.id}`, {
                status: !selectedPost.status
            })
            getAllPost()
            handleConfirmClose()
        } catch (error) {
            console.error("Lỗi khi chặn/mở khóa bài viết:", error)
        }
    }

    // Handle Edit
    const handleEdit = (item: Post) => {
        setInputValue(item)
        setIsEditing(true)
        setShow(true)
    }

    // Handle Delete
    const handleDelete = async (id?: number) => {
        if (!id) return
        if (!window.confirm("Bạn có chắc muốn xóa bài viết này không?")) return
        try {
            await axios.delete(`http://localhost:8080/post/${id}`)
            getAllPost()
        } catch (error) {
            console.error("Lỗi khi xóa bài viết:", error)
        }
    }

    //Search
    const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const keyword = e.target.value
        setSearch(keyword)

        try {
            const response = await axios.get(`http://localhost:8080/post?title_like=${keyword}`)
            setPost(response.data)
        } catch (error) {
            console.error("Lỗi khi tìm kiếm:", error)
        }
    }
    //Lọc
    const handleFilter = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value
        setFilterStatus(value)

        try {
            if (value === "") {
                // Lấy lại tất cả post
                getAllPost()
            } else {
                const response = await axios.get(`http://localhost:8080/post?status=${value === "1" ? true : false}`)
                setPost(response.data)
            }
        } catch (error) {
            console.error("Lỗi khi lọc:", error)
        }
    }


    return (
        <div className="list-post-container">
            <div className="list-post-wrapper">
                <h1>Danh sách bài viết</h1>

                {/* Header */}
                <header className="list-post-header">
                    <div>
                        <input type="text" placeholder="Tìm kiếm..." onChange={handleSearch} value={search} />
                        <select value={filterStatus} onChange={handleFilter}>
                            <option value="">---Lựa chọn---</option>
                            <option value="1">Đã xuất bản</option>
                            <option value="0">Ngừng xuất bản</option>
                        </select>

                    </div>
                    <div>
                        <Button variant="primary" onClick={handleShow}>
                            Thêm
                        </Button>
                    </div>
                </header>

                {/* Table */}
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tiêu đề</th>
                            <th>Hình ảnh</th>
                            <th>Nội dung</th>
                            <th>Ngày viết</th>
                            <th>Trạng thái</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {post.map((item, index) => (
                            <tr key={item.id}>
                                <td className="align-middle text-center">{index + 1}</td>
                                <td className="align-middle">{item.title}</td>
                                <td className="align-middle text-center">
                                    <img src={item.image || ""} alt="img" width="50" className="imageTD" />
                                </td>
                                <td className="align-middle">{item.content || "#####"}</td>
                                <td className="align-middle">{item.date || "#####"}</td>
                                <td className="align-middle">
                                    {item.status ? "Đã xuất bản" : "Ngừng xuất bản"}
                                </td>
                                <td className="align-middle">
                                    <Button variant="warning" size="sm" onClick={() => handleConfirmShow(item)}>
                                        {item.status ? "Chặn" : "Mở"}
                                    </Button>{" "}
                                    <Button variant="success" size="sm" onClick={() => handleEdit(item)}>
                                        Sửa
                                    </Button>{" "}
                                    <Button variant="danger" size="sm" onClick={() => handleDelete(item.id)}>
                                        Xóa
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            {/* Modal thêm/sửa bài viết */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{isEditing ? "Sửa bài viết" : "Thêm bài viết mới"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formTitle">
                            <Form.Label>Tiêu đề</Form.Label>
                            <Form.Control
                                name="title"
                                type="text"
                                placeholder="Nhập tiêu đề bài viết"
                                autoFocus
                                onChange={handleChange}
                                value={inputValue.title}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formImage">
                            <Form.Label>Hình ảnh</Form.Label>
                            <Form.Control name="image" type="file" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formContent">
                            <Form.Label>Nội dung</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="content"
                                rows={3}
                                placeholder="Nhập nội dung bài viết..."
                                onChange={handleChange}
                                value={inputValue.content}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formStatus">
                            <Form.Label>Trạng thái</Form.Label>
                            <Form.Select name="status" onChange={handleChange} value={inputValue.status ? "1" : "0"}>
                                <option value="0">Ngừng xuất bản</option>
                                <option value="1">Đã xuất bản</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Hủy
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        {isEditing ? "Cập nhật" : "Lưu"}
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal confirm */}
            <Modal show={showConfirm} onHide={handleConfirmClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Bạn có chắc muốn {selectedPost?.status ? "ngừng xuất bản" : "xuất bản lại"} bài viết
                        không?
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleConfirmClose}>
                        Hủy
                    </Button>
                    <Button variant="primary" onClick={handleBlock}>
                        Đồng ý
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
