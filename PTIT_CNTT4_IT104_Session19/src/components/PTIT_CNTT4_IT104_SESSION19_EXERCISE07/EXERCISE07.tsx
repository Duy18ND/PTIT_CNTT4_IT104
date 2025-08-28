import React, { useRef } from "react";
import './EXERCISE07.css'
export default function EXERCISE07() {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    const scrollToContent = () => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
            <div className="container07">
                <h1>
                    Cuộn tới nội dung
                </h1>
                <button
                    onClick={scrollToContent} className="btn07">
                    Đi tới phần nội dung
                </button>
            </div>

            <div className="blog07" ref={sectionRef}>
                <p>Đây là nội dung giả lập để tạo khoảng cách cho trang...</p>
                <p>
                    Bạn có thể thêm nhiều đoạn như thế này để tăng chiều dài trang và có
                    thể kiểm tra tính năng cuộn.
                </p>
                <p>Cuộn trang sẽ mượt mà hơn khi có nhiều nội dung.</p>
            </div>

           <div ref={sectionRef}></div> 
        </div>
    );
}