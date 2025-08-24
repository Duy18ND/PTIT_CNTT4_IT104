import React, { Component } from 'react';
import DetailPost from './DetailPost';

type Product = {
    Id: number;
    Title: string;
    Content: string;
    Author: string;
};

type ProductListState = {
    productList: Product[];
};

export default class ListPost extends Component<object, ProductListState> {
    constructor(props: object) {
        super(props);
        this.state = {
            productList: [
                {
                    Id: 1,
                    Title: "Bài viết 1",
                    Content: "Nội dung bài viết 1",
                    Author: "Nguyễn Văn A"
                },
                {
                    Id: 2,
                    Title: "Bài viết 2",
                    Content: "Nội dung bài viết 2",
                    Author: "Trần Thị B"
                }
            ]
        };
    }

    render() {
        return (
            <div>
                <DetailPost productList={this.state.productList}></DetailPost>
            </div>
        );
    }
}
