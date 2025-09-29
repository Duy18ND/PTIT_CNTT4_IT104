import axios from "axios";
import React, { useState } from "react";

export default function UploadWithThumbnail() {
  const [image, setImage] = useState<File | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [showFull, setShowFull] = useState<boolean>(false);

  // chọn ảnh
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  // upload ảnh
  const handleClick = async () => {
    if (!image) {
      alert("Vui lòng chọn ảnh trước khi upload");
      return;
    }

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "product_upload");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dggdxfqjz/image/upload",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log("Response:", res.data);
      setUrl(res.data.secure_url);
    } catch (error: any) {
      console.error("Upload thất bại:", error.response?.data || error.message);
    }
  };

  // tạo URL thumbnail từ Cloudinary
  const getThumbnailUrl = (url: string) => {
    return url.replace("/upload/", "/upload/w_200,h_200,c_fill/"); 
    // w=200, h=200, crop fill
  };

  return (
    <div>
      <h1>Upload Ảnh + Thumbnail</h1>
      <input type="file" onChange={handleChange} />
      <button onClick={handleClick}>Upload</button>

      {url && (
        <div style={{ marginTop: "20px" }}>
          {!showFull ? (
            <img
              src={getThumbnailUrl(url)}
              alt="thumbnail"
              style={{ cursor: "pointer", border: "2px solid #ccc" }}
              onClick={() => setShowFull(true)}
            />
          ) : (
            <img
              src={url}
              alt="original"
              style={{ maxWidth: "400px", border: "2px solid #000" }}
              onClick={() => setShowFull(false)}
            />
          )}
        </div>
      )}
    </div>
  );
}
