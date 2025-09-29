import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../store/Slice/product";

export default function Upload_Image() {
  const [image, setImage] = useState<File | null>(null);
  const [url, setUrl] = useState<string | null>(null);

  const dispatch = useDispatch();
  const result = useSelector((state: any) => state.products.products);

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleClick = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "upload_image"); // chỉ giữ dòng này

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dggdxfqjz/image/upload",
        formData
      );
      console.log("Response from Cloudinary:", res.data);
      setUrl(res.data.secure_url);
    } catch (error) {
      console.error("Error Upload_Image", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Upload ảnh lên CLOUDINARY!</h1>
      <input type="file" onChange={handleChange} />
      <button onClick={handleClick}>Upload</button>
      {url && (
        <div>
          <p>Ảnh vừa upload:</p>
          <img
            src={url}
            alt="Uploaded"
            style={{ maxWidth: "300px", marginTop: "10px" }}
          />
        </div>
      )}

      <h2 style={{ marginTop: "30px" }}>Danh sách sản phẩm</h2>
      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên sản phẩm</th>
            <th>Ảnh</th>
          </tr>
        </thead>
        <tbody>
          {result.map((item: any, index: number) => (
            <tr key={item.id || index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "100px", height: "auto" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
