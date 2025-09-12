import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "./Data";

export default function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find((item) => item.id === Number(id));

    if (!product) {
        return (
            <div style={{ padding: "20px" }}>
                <h2 className="text-red-500">Sản phẩm không tồn tại</h2>
                <button
                    onClick={() => navigate(-1)}
                    className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
                >
                    Quay lại danh sách sản phẩm
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-center items-center mt-6">
            <div className="p-5 border rounded-[7px]">
                <div>
                    <h2 className="text-xl font-bold mb-4">Chi tiết sản phẩm</h2>
                    <p>
                        <b>Tên:</b> {product.name}
                    </p>
                    <p>
                        <b>Giá:</b> {product.price}
                    </p>
                    <p>
                        <b>Mô tả:</b> {product.des}
                    </p>
                </div>

                <div>
                    <button
                        onClick={() => navigate(-1)}
                        className="mt-4 bg-blue-500 text-white px-3 py-1 rounded"
                    >
                        Quay lại danh sách sản phẩm
                    </button>
                </div>
            </div>
        </div>
    );
}
