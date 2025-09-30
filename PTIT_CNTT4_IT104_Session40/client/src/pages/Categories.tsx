import { useEffect, useMemo, useState } from "react";
import { Button, Form, Input, Modal, Pagination, Select, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import axios from "axios";
import type { Category } from "../utils/types";

type CategoryStatus = "active" | "inactive" | "all";

type CategoryRow = {
  id: number;
  name: string;
  describe: string;
  status: CategoryStatus;
};

export default function Categories() {
  const [rows, setRows] = useState<CategoryRow[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<CategoryStatus | "">("");
  const [page, setPage] = useState(1);
  const [form] = Form.useForm();
  const pageSize = 5;

  // Hàm lấy tất cả danh mục từ server
  const getAllCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8080/categories");
      setRows(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Hàm thêm danh mục mới
  const addCategory = async (new_category: Category) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/categories",
        new_category
      );
      setRows([...rows, response.data]);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  // Hàm sửa danh mục
  const editCategory = async (update_category: Category) => {
    try {
      const res = await axios.put(
        `http://localhost:8080/categories/${update_category.id}`,
        update_category
      );
      setRows(
        rows.map((item) => (item.id === update_category.id ? res.data : item))
      );
    } catch (error) {
      console.log(error);
    }
  };

  // Hàm tìm kiếm danh mục
  const searchCategory = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/categories?name_like=${search}`
      );
      setRows(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<CategoryRow | null>(null);

  useEffect(() => {
    getAllCategories();
  }, []);

  useEffect(() => {
    searchCategory();
  }, [search]);

  useEffect(() => {
    if (editing) {
      form.setFieldsValue({
        id: editing.id,
        name: editing.name,
        describe: editing.describe,
        status: editing.status,
      });
    } else {
      form.resetFields();
      form.setFieldsValue({ status: "active" });
    }
  }, [editing, form]);

  const filtered = useMemo(() => {
    return rows.filter((r) =>
      statusFilter ? r.status === statusFilter : true
    );
  }, [rows, statusFilter]);

  const paged = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page]);

  const columns: ColumnsType<CategoryRow> = [
    { title: "Mã", dataIndex: "id", key: "id", width: 120 },
    { title: "Tên", dataIndex: "name", key: "name" },
    { title: "Mô tả", dataIndex: "describe", key: "describe" },
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

  function onEdit(row: CategoryRow) {
    setEditing(row);
    setOpen(true);
  }

  async function onDelete(id: number) {
    const confirmDelete = window.confirm(
      "Bạn có chắc muốn xóa danh mục này không?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8080/categories/${id}`);
        setRows(rows.filter((r) => r.id !== id));
      } catch (error) {
        console.log(error);
      }
    }
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  interface CategoryFormValues {
    id?: number;
    name: string;
    describe?: string;
    status: CategoryStatus;
  }

  function onSubmit(values: CategoryFormValues) {
    if (values.id) {
      const next: Category = {
        id: values.id,
        name: values.name,
        describe: values.describe || "",
        status: values.status,
      };
      editCategory(next);
    } else {
      const next: Category = {
        name: values.name,
        describe: values.describe,
        status: values.status,
      };
      addCategory(next);
    }
    setOpen(false);
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold">Quản lý danh mục</div>
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
              setStatusFilter((v as CategoryStatus) || "");
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
        title={editing ? "Sửa danh mục" : "Thêm mới danh mục"}
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
          <Form.Item name="describe" label="Mô tả">
            <Input.TextArea rows={3} />
          </Form.Item>
          <Form.Item
            name="status"
            label="Trạng thái"
            rules={[{ required: true, message: "Trạng thái chưa được chọn" }]}
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
