import { useEffect, useState } from "react";
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

export default function EXERCISE04() {
  const [students, setStudents] = useState<DataStudent[]>([]);

  async function getAllStudent() {
    try {
      const res = await axios.get("http://localhost:8080/studentList");
      setStudents(res.data);
      console.log(res.data); 
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
    }
  }

  useEffect(() => {
    getAllStudent();
  }, []);
}
