import React, { useReducer, useEffect } from 'react';
import './EXERCISE09.css';

const data = [
    { id: 1, name: "Apple iPhone 13", description: "Smartphone mới nhất của Apple" },
    { id: 2, name: "Samsung Galaxy S21", description: "Smartphone flagship của Samsung" },
    { id: 3, name: "OnePlus 9 Pro", description: "Smartphone hiệu suất cao từ OnePlus" },
    { id: 4, name: "Google Pixel 6", description: "Điện thoại thông minh của Google" },
    { id: 5, name: "Xiaomi Mi 11", description: "Điện thoại thông minh giá rẻ" },
    { id: 6, name: "Oppo Find X3 Pro", description: "Smartphone cao cấp với camera ấn tượng" },
];

type State = {
    product: typeof data;
    searchInput: string;
};

type Action = {
    type: string;
    payload: string | typeof data;
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "SET_SEARCH":
            return { ...state, searchInput: action.payload as string };
        case "SET_PRODUCT":
            return { ...state, product: action.payload as typeof data };
        default:
            return state;
    }
};

export default function EXERCISE09() {
    const [state, dispatch] = useReducer(reducer, { product: data, searchInput: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: "SET_SEARCH", payload: e.target.value });
    };

    useEffect(() => {
        const findFilter = data.filter(item =>
            item.name.toLowerCase().includes(state.searchInput.toLowerCase())
        );
        dispatch({ type: "SET_PRODUCT", payload: findFilter });
    }, [state.searchInput]);

    return (
        <div className='container09'>
            <div className='container09_Child'>
                <h2>Tìm kiếm sản phẩm</h2>
                <input type="text" onChange={handleChange} />

                <ul>
                    {state.product.map((item) => (
                        <li key={item.id}>
                            <h3>{item.name}</h3>
                            <span>{item.description}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
