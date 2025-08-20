import React, { use } from 'react'


  interface User {
        firstName: string,
        lastName: string,
    }

function formatName(user: User):string{
    return `${user.firstName} ${user.lastName}`;
}
export default function EXERCISE05() {
  
    const user: User = {
        firstName: "Đoàn Mạnh",
        lastName: "Duy",
    }

  return (
    <div>
      <h2>Họ và tên: {formatName(user)}</h2>
    </div>
  )
}
