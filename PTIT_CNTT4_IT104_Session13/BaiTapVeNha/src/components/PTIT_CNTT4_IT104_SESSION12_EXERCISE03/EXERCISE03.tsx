import React, { Component } from 'react';

type User = {
  id: number;
  name: string;
  age: number;
};

type UserList = {
  users: User[];
};

export default class EXERCISE03 extends Component<object, UserList> {
  constructor(props: object) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: "Duy", age: 30 },
        { id: 2, name: "Hoa", age: 23 },
        { id: 3, name: "Hoai", age: 20 },
      ]
    };
  }

  render() {
    return (
      <div>
        <h2>Danh sách Users</h2>
        <table border={1} cellPadding={5} style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên</th>
              <th>Tuổi</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
