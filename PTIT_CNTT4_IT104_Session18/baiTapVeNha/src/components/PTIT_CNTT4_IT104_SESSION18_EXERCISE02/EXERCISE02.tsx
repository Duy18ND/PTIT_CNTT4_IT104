import React, { useMemo } from 'react';

type User = {
  id: number,
  name: string,
  age: number
}

export default function EXERCISE02() {
  const user: User[] = [
    { id: 1, name: "Đoàn Mạnh Duy", age: 19 },
    { id: 2, name: "ĐMD", age: 23 },
    { id: 3, name: "Poddle", age: 3 },
  ];

  const filterUser = useMemo(() => {
    return user.filter((item) => item.age >= 18);
  }, [user]);

  return (
    <div>
      <h2>Danh sách người trên 18 tuổi</h2>
      <ul>
        {filterUser.map((u) => (
          <li key={u.id}>
            {u.name} - {u.age} tuổi
          </li>
        ))}
      </ul>
    </div>
  )
}
