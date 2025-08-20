import React, { Component } from 'react';

type User = {
  Id: number;
  Title: string;
  Content: string;
  Author: string;
};

type Props = {
  userList: User[];
};

export default class DetailPost extends Component<Props> {
  render() {
    const { userList } = this.props;
    return (
      <div>
        <h2>Chi tiết bài viết</h2>
        {userList.map((user) => (
          <div key={user.Id}>
            <h3>{user.Title}</h3>
            <p>{user.Content}</p>
            <p><b>Tác giả:</b> {user.Author}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}
