import React from 'react'
import StudentInfo from './StudentInfo';
import Baitap1 from './Baitap1';


export default function App() {
  const fullname:string = "Đoàn Mạnh Duy";
  const age:number = 30;
  let isActive:boolean = true;
  const student:string[] = ["Thu","Hoa","Hong"]
  const new_Student = {
    name:"Duy",
    age:23,
    address:"HN"
  }
  const course:string[] = ["Toan","LY","Hoa"]
  const scores = [
    {
      name:"Hong Van",
      math:9,
    },
    {
      name:"Duy",
      math:1,
    },
    {
      name:"Linh",
      math:10,
    }
  ]
  return (
    <>
      <div>
      COM MẸ DUY
      <p>Họ và tên:{fullname},Tuoi:{age}</p>
      <p>Danh sach SV:{student}</p> 
      <p>Thong tin SV:{JSON.stringify(new_Student)}</p>    
      <p>Danh sach khoa hoc:</p>
      <ul>
        {course.map((item,index) =>{
          return <li key = {index}>{item}</li>
        })}
      </ul>
      </div>
      <StudentInfo></StudentInfo>
      <Baitap1></Baitap1>
    </>

  )
}