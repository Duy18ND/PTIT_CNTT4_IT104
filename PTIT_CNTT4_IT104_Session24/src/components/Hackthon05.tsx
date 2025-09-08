import { Button, Modal, Pagination } from "antd";
import { CirclePlus, House } from "lucide-react";
import React, { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  address: string;
  isStatus: boolean;
};

export default function Hackthon05() {
  const [products, setProducts] = useState<Product[]>([]);
  const [inputValue, setInputValue] = useState<Product>({
    id: 0,
    name: "",
    address: "",
    isStatus: true,
  });
  const [error, setError] = useState<{ name: string; address: string }>({
    name: "",
    address: "",
  });

  // Modal states
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);

  // Load từ localStorage
  useEffect(() => {
    const stored = localStorage.getItem("products");
    if (stored) {
      setProducts(JSON.parse(stored));
    }
  }, []);

  // Hàm cập nhật + lưu localStorage
  const updateProducts = (newProducts: Product[]) => {
    setProducts(newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
  };

  // Handle input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "isStatus") {
      setInputValue({ ...inputValue, isStatus: value === "true" });
    } else {
      setInputValue({ ...inputValue, [name]: value });
    }
  };

  // Add
  const handleAdd = () => {
    if (!inputValue.name || !inputValue.address) {
      setError({
        name: !inputValue.name ? "Tên kho không được để trống!" : "",
        address: !inputValue.address ? "Địa chỉ không được để trống!" : "",
      });
      return;
    }
    setError({ name: "", address: "" });

    const newProduct = { ...inputValue, id: Date.now() };
    updateProducts([...products, newProduct]);

    setInputValue({ id: 0, name: "", address: "", isStatus: true });
  };

  // Open edit modal
  const openEdit = (product: Product) => {
    setCurrentProduct(product);
    setIsEditOpen(true);
  };

  // Save edit
  const handleEditSave = () => {
    if (currentProduct) {
      const updated = products.map((p) =>
        p.id === currentProduct.id ? currentProduct : p
      );
      updateProducts(updated);
    }
    setIsEditOpen(false);
    setCurrentProduct(null);
  };

  // Open delete modal
  const openDelete = (product: Product) => {
    setCurrentProduct(product);
    setIsDeleteOpen(true);
  };

  // Confirm delete
  const handleDeleteConfirm = () => {
    if (currentProduct) {
      const updated = products.filter((p) => p.id !== currentProduct.id);
      updateProducts(updated);
    }
    setIsDeleteOpen(false);
    setCurrentProduct(null);
  };

  return (
    <div className="bg-[rgb(243,244,246)] h-[100vh]">
      <div className="p-15 flex flex-col gap-6">
        {/* Header */}
        <header className="flex gap-3 bg-[#009689] p-10 justify-center items-center rounded-[12px]">
          <House className="text-white h-[40px] w-[40px]" />
          <h2 className="font-medium text-white text-4xl">Quản Lý Kho</h2>
        </header>

        {/* ADD */}
        <main className="bg-[#ffffff] rounded-[12px]">
          <div className="p-6 flex gap-2 items-center">
            <CirclePlus className="text-[#009689]" />
            <h3 className="text-[#009689] text-[20px]">Thêm kho mới</h3>
          </div>

          {/* Input */}
          <div className="p-6 flex gap-4 items-start">
            {/* Ô nhập Tên kho */}
            <div className="flex flex-col w-[30%]">
              <input
                name="name"
                value={inputValue.name}
                onChange={handleChange}
                type="text"
                placeholder="Tên kho"
                className="border border-[#d4d4d4] rounded-md p-2 outline-none"
              />
              {error.name && (
                <p className="text-red-500 text-sm mt-1">{error.name}</p>
              )}
            </div>

            {/* Ô nhập Địa chỉ */}
            <div className="flex flex-col w-[30%]">
              <input
                name="address"
                value={inputValue.address}
                onChange={handleChange}
                type="text"
                placeholder="Địa chỉ"
                className="border border-[#d4d4d4] rounded-md p-2 outline-none"
              />
              {error.address && (
                <p className="text-red-500 text-sm mt-1">{error.address}</p>
              )}
            </div>

            {/* Trạng thái */}
            <select
              name="isStatus"
              value={inputValue.isStatus.toString()}
              onChange={handleChange}
              className="border border-[#d4d4d4] rounded-md p-2 text-center w-[18%]"
            >
              <option value="true">Hoạt động</option>
              <option value="false">Ngừng hoạt động</option>
            </select>

            {/* Nút thêm */}
            <Button
              type="primary"
              className="!px-6 !py-[19px]"
              onClick={handleAdd}
            >
              Thêm
            </Button>
          </div>
        </main>

        {/* Danh sách */}
        <section className="bg-[#ffffff] rounded-[12px]">
          <div className="p-5 pt-8 flex flex-col gap-3">
            <div className="text-[20px] text-[#009689]">Danh sách kho</div>

            <table className="w-full border-collapse">
              <thead className="text-[#3a3836]">
                <tr>
                  <th className="border border-[#d4d4d4] p-5 text-[18px]">
                    Tên kho
                  </th>
                  <th className="border border-[#d4d4d4] p-5 text-[18px]">
                    Địa chỉ
                  </th>
                  <th className="border border-[#d4d4d4] p-5 text-[18px]">
                    Trạng thái
                  </th>
                  <th className="border border-[#d4d4d4] p-5 text-[18px]">
                    Hành động
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="border border-[#d4d4d4] p-4 text-center text-[#3f91ff]">
                      {product.name}
                    </td>
                    <td className="border border-[#d4d4d4] p-4 text-center">
                      {product.address}
                    </td>
                    <td className="border border-[#d4d4d4] p-4 text-center">
                      {product.isStatus ? (
                        <span className="px-3 py-1 text-green-600 border border-green-500 rounded">
                          Hoạt động
                        </span>
                      ) : (
                        <span className="px-3 py-1 text-red-600 border border-red-300 bg-red-50 rounded">
                          Ngừng hoạt động
                        </span>
                      )}
                    </td>
                    <td className="border border-[#d4d4d4] p-4 flex justify-center gap-3">
                      <Button color="primary" variant="outlined" onClick={() => openEdit(product)}>Sửa</Button>
                      <Button danger onClick={() => openDelete(product)}>
                        Xóa
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <footer className="flex justify-end pb-8 pr-5">
            <Pagination defaultCurrent={1} total={products.length} />
          </footer>
        </section>
      </div>

      {/* Modal Edit */}
      <Modal
        title="Chỉnh sửa kho"
        open={isEditOpen}
        onOk={handleEditSave}
        onCancel={() => setIsEditOpen(false)}
      >
        {currentProduct && (
          <div className="flex flex-col gap-4">
            <input
              type="text"
              value={currentProduct.name}
              onChange={(e) =>
                setCurrentProduct({ ...currentProduct, name: e.target.value })
              }
              className="border border-[#d4d4d4] rounded-md p-2 outline-none"
            />
            <input
              type="text"
              value={currentProduct.address}
              onChange={(e) =>
                setCurrentProduct({ ...currentProduct, address: e.target.value })
              }
              className="border border-[#d4d4d4] rounded-md p-2 outline-none"
            />
            <select
              value={currentProduct.isStatus.toString()}
              onChange={(e) =>
                setCurrentProduct({
                  ...currentProduct,
                  isStatus: e.target.value === "true",
                })
              }
              className="border border-[#d4d4d4] rounded-md p-2 outline-none"
            >
              <option value="true">Hoạt động</option>
              <option value="false">Ngừng hoạt động</option>
            </select>
          </div>
        )}
      </Modal>

      {/* Modal Delete */}
      <Modal
        title="Xác nhận xóa"
        open={isDeleteOpen}
        onOk={handleDeleteConfirm}
        onCancel={() => setIsDeleteOpen(false)}
        okButtonProps={{ danger: true }}
        okText="Xóa"
        cancelText="Hủy"
      >
        <p>Bạn có chắc chắn muốn xóa kho này không?</p>
      </Modal>
    </div>
  );
}
