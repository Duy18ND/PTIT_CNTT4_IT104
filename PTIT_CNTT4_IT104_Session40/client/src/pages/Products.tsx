import { useEffect, useMemo, useState } from "react";
import {
  Button,
  Form,
  Image,
  Input,
  Modal,
  Pagination,
  Select,
  Table,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import type { Category, Product } from "../utils/types";

type ProductStatus = "active" | "inactive" | "all";

type ProductRow = {
  id: number;
  name: string;
  categoryId: number;
  price: number;
  image: string;
  status: ProductStatus;
};

export default function Products() {
  const [rows, setRows] = useState<ProductRow[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<ProductStatus | "">("");
  const [page, setPage] = useState(1);
  const [categories, setCategories] = useState<Category[]>([]);
  const [url, setUrl] = useState<string>("");
  const [form] = Form.useForm();
  const pageSize = 5;
  //Hàm lấy Tất cả sản phẩm trên server về
  const getAllProduct = async () => {
    const res = await axios.get("http://localhost:8080/products");
    setRows(res.data);
  };
  //Hàm lấy tất cả danh mục
  const getAllCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8080/categories");
      console.log(`giá trị trả về`, response);
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleUrl = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: any = e.target.files?.[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", import.meta.env.VITE_PROJECT_NAME);
    formData.append("cloud_name", import.meta.env.VITE_CLOUDINARY_NAME);
    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_CLOUDINARY_NAME
        }/image/upload`,
        formData
      );
      console.log("image", response.data);

      setUrl(response.data.url);
    } catch (error) {
      console.log(error);
    }
  };
  //Hàm gửi thông tin sản phẩm lên trên JSON SERVER
  const addProduct = async (new_product: Product) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/products`,
        new_product
      );
      setRows([...rows, response.data]);
      return response.data;
    } catch (error) {}
  };
  //Hàm sửa sản phẩm
  const editProduct = async (update_product: Product) => {
    try {
      const res = await axios.put(
        `http://localhost:8080/products/${update_product.id}`,
        update_product
      );
      setRows(
        rows.map((item) => (item.id === update_product.id ? res.data : item))
      );
    } catch (error) {
      console.log(error);
    }
  };
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<ProductRow | null>(null);
  useEffect(() => {
    getAllCategories();
    getAllProduct();
  }, []);
  useEffect(() => {
    searchProduct();
  }, [search]);
  useEffect(() => {
    if (editing) {
      form.setFieldsValue({
        id: editing.id,
        name: editing.name,
        price: editing.price,
        status: editing.status,
        category: editing.categoryId,
      });
      setUrl(editing.image);
    } else {
      form.resetFields();
      form.setFieldsValue({ status: "active" });
      setUrl("");
    }
  }, [editing, form]);
  const filtered = useMemo(() => {
    return (
      rows
        // .filter((r) =>
        //   statusFilter ? r.status === statusFilter : true
        // )
        .filter((r) => (statusFilter ? r.status === statusFilter : true))
    );
  }, [rows, search, statusFilter]);

  const paged = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page]);

  const columns: ColumnsType<ProductRow> = [
    { title: "Mã", dataIndex: "id", key: "id", width: 120 },
    { title: "Tên", dataIndex: "name", key: "name" },
    {
      title: "Danh mục",
      dataIndex: "categoryId",
      key: "categoryId",
      width: 160,
      render: (id: number) => {
        const category = categories.find((item) => item.id === id);
        return category ? category.name : "";
      },
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      width: 140,
      render: (v: number) => v.toLocaleString() + " đ",
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      key: "image",
      width: 120,
      render: (src: string) => (src ? <Image src={src} width={56} /> : "-"),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      width: 120,
      render: (s: string) => (s === "active" ? "Hoạt động" : "Ngừng"),
    },
    {
      title: "Thao tác",
      key: "actions",
      width: 160,
      render: (_, record) => (
        <div className="flex gap-2">
          <Button size="small" type="primary" onClick={() => onEdit(record)}>
            Sửa
          </Button>
          <Button size="small" danger onClick={() => onDelete(record.id)}>
            Xóa
          </Button>
        </div>
      ),
    },
  ];

  function onAdd() {
    setEditing(null);
    setOpen(true);
  }

  function onEdit(row: ProductRow) {
    setEditing(row);
    setOpen(true);
  }

  async function onDelete(id: number) {
    const confirmDelete = window.confirm(
      "Bạn có chắc muốn xóa sản phẩm này không ?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(` http://localhost:8080/products/${id}`);
        setRows(rows.filter((r) => r.id !== id));
      } catch (error) {
        console.log(error);
      }
    }
  }
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const searchProduct = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/products?name_like=${search}`
      );
      setRows(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  interface ProductFormValues {
    id: number;
    name: string;
    category: string;
    price: number | string;
    image?: string;
    status: ProductStatus;
  }

  function onSubmit(values: ProductFormValues) {
    // const imageUrl =
    //   typeof values.image === "string" ? values.image : values.image || "";
    if (values.id) {
      const next: Product = {
        id: values.id,
        name: values.name,
        categoryId: values.category,
        price: Number(values.price) || 0,
        image: url,
        status: values.status,
      };
      editProduct(next);
    } else {
      const next: Product = {
        name: values.name,
        categoryId: values.category,
        price: Number(values.price) || 0,
        image: url,
        status: values.status,
      };
      addProduct(next);
    }

    setOpen(false);
  }
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold">Ứng Dụng Quản lý sản phẩm</div>
        <Button type="primary" onClick={onAdd}>
          Thêm mới
        </Button>
      </div>

      <div className="flex justify-end gap-3">
        <Select
          placeholder="Trạng thái"
          className="min-w-40"
          allowClear
          value={statusFilter || undefined}
          onChange={(v) => {
            if (v === "all") {
              setStatusFilter("");
            } else {
              setStatusFilter((v as ProductStatus) || "");
            }
          }}
          options={[
            { value: "all", label: "Tất cả" },
            { value: "active", label: "Hoạt động" },
            { value: "inactive", label: "Ngừng hoạt động" },
          ]}
        />
        <Input
          style={{ width: "300px" }}
          placeholder="Tìm kiếm"
          value={search}
          onChange={handleSearch}
        />
      </div>

      <Table
        columns={columns}
        dataSource={paged}
        pagination={false}
        rowKey="id"
      />

      <div className="flex justify-end">
        <Pagination
          current={page}
          pageSize={pageSize}
          total={filtered.length}
          onChange={setPage}
        />
      </div>

      <Modal
        title={editing ? "Sửa sản phẩm" : "Thêm mới sản phẩm"}
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        destroyOnClose
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onSubmit}
          initialValues={editing ?? { status: "active" }}
        >
          <Form.Item
            name="name"
            label="Tên"
            rules={[{ required: true, message: "Tên không được để trống" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="category"
            label="Danh mục"
            rules={[{ required: true, message: "Danh mục chưa được chọn" }]}
          >
            <Select
              options={categories.map((item: Category) => {
                return { value: item.id, label: item.name };
              })}
              placeholder="Nhập tên danh mục"
            />
          </Form.Item>
          <Form.Item
            name="price"
            label="Giá"
            rules={[
              { required: true, message: "Giá tiền không được bỏ trống" },
            ]}
          >
            <Input type="number" min={0} />
          </Form.Item>
          <Form.Item label="Ảnh (URL)">
            <Input type="file" placeholder="Dán URL ảnh" onChange={handleUrl} />
            {url && (
              <Image
                src={url}
                alt="ảnh sản phẩm"
                width={120}
                style={{ marginTop: "5px", width: "60px", height: "80px" }}
              />
            )}
          </Form.Item>
          <Form.Item
            name="status"
            label="Trạng thái"
            rules={[{ required: true }]}
          >
            <Select
              options={[
                { value: "active", label: "Hoạt động" },
                { value: "inactive", label: "Ngừng" },
              ]}
            />
          </Form.Item>
          <Form.Item name="id" hidden>
            <Input type="hidden" />
          </Form.Item>
          <Form.Item noStyle>
            <div className="flex justify-end gap-2">
              <Button onClick={() => setOpen(false)}>Hủy</Button>
              <Button type="primary" htmlType="submit">
                Lưu
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
