import React, { useEffect, useState } from 'react'
import Loading from './components/Loading'
import axios from 'axios';
type User = {
  id: number,
  name: string,
  email: string,
  age: number
}
export default function App() {
  const [Loading1, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User[]>([]);

  async function getAllUser() {
    let result: User[] = [];

    try {
      const response = await axios.get("http://localhost:8080/user");
      // setUser([...response.data]);
      result = response.data;
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
    } finally {
      //Hoàn thành quá trình
      setTimeout(() => {
        setLoading(false);
        setUser([...result]);
      }, 2000);

    }
  }

  useEffect(() => {
    getAllUser();
  }, []);
  return (
    <div>
      <h1>Học API</h1>
      {Loading1 ? <Loading></Loading> : ""}
      {user.map((item) => (
        <div>{item.id} - {item.name} - {item.email}</div>
      ))}
    </div>
  )
}
