import React, { Component } from 'react';
import './EXERCISE01.css'
export default class EXERCISE01 extends Component {
  render() {
    const arr: string[] = ["Toán", "Văn", "Anh"];
    return (
      <div>
        <h1>Danh sách môn học</h1>
        {arr.map((item, index) => (
          <div className='subject' key={index}>{item}</div>
        ))}
      </div>
    );
  }
}
