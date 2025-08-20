import React, { Component } from 'react'
import DetailPost from './DetailPost';
type User = {
    Id: number,
    Title: string,
    Content: string,
    Author: string
}
type UserList = {
    userList: User[];
}
export default class ListPost extends Component <object, UserList> {
    constructor(props: object){
        super(props);
        this.state = {
            userList: [
                {
                    Id: 1,
                    Title: "Tai sao phai hoc ReactJS",
                    Content: "Hoc React de di lam",
                    Author: "Duy"
                },
                {
                    Id: 2,
                    Title: "Hoc React de di lam",
                    Content: "Tai sao phai hoc ReactJS",
                    Author: "Duy"
                },
                {
                    Id: 2,
                    Title: "alo",
                    Content: "Hello World",
                    Author: "Duy"
                },
            ]
        }
    }
  render() {
    return (
      <div>
        <DetailPost userList = {this.state.userList}/>
      </div>
    )
  }
}
