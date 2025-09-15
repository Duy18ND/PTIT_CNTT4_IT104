import { useEffect } from "react";
import axios from "axios";

type DataStudent = {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
};

export default function EXERCISE05() {
  async function getStudentById(id: number) {
    try {
      const res = await axios.get<DataStudent>(`http://localhost:8080/studentList/${id}`);
      console.log("Thông tin sinh viên:", res.data);
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        console.log("Không tìm thấy bản ghi");
      } else {
        console.error("Lỗi khi gọi API:", error);
      }
    }
  }

  useEffect(() => {
    getStudentById(2);
  }, []);
}
