import React, { Component } from 'react';

type Product = {
    Id: number;
    Title: string;
    Content: string;
    Author: string;
};

type DetailPostProps = {
    productList: Product[];
};

export default class DetailPost extends Component<DetailPostProps> {
    render() {
        return (
            <div>
                <h2>Danh sách bài viết</h2>
                {this.props.productList.map(item => (
                    <ul
                        key={item.Id}
                        style={{ listStyle: 'none', fontWeight: 'bold', lineHeight: '35px'}}
                    >
                        <li>ID: {item.Id}</li>
                        <li>Tiêu đề: {item.Title}</li>
                        <li>Nội dung: {item.Content}</li>
                        <li>Tác giả: {item.Author}</li>
                        <hr />
                    </ul>
                ))}
            </div>
        );
    }
}
