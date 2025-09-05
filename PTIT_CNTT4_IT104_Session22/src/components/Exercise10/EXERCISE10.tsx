// menu
import {
  AppstoreOutlined,
  CalendarOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { Menu, Tabs, Button, Switch, Pagination } from 'antd';
import type { GetProp, MenuProps, TabsProps } from 'antd';

type MenuItem = GetProp<MenuProps, 'items'>[number];

const menuItems: MenuItem[] = [
  {
    key: '1',
    icon: <MailOutlined />,
    label: 'Navigation One',
  },
  {
    key: '2',
    icon: <CalendarOutlined />,
    label: 'Navigation Two',
  },
  {
    key: 'sub1',
    label: 'Navigation Three',
    icon: <AppstoreOutlined />,
  },
];

// tab
const onChange = (key: string) => {
  console.log(key);
};

const tabItems: TabsProps['items'] = [
  {
    key: '1',
    label: 'User',
  },
];
type User = {
  id: number;
  name: string;
  date: string;
  photo: string;
  status: boolean;
};

// dữ liệu mẫu
const users: User[] = [
  { id: 1, name: "Jass Jas", date: "09 Apr 2021", photo: "img", status: true },
  { id: 2, name: "Pauline Jas", date: "26 Jan 2021", photo: "img", status: false },
  { id: 3, name: "Sherilyn Metzel", date: "27 Jan 2021", photo: "img", status: true },
  { id: 4, name: "Haily Carthew", date: "27 Jan 2018", photo: "img", status: false },
  { id: 5, name: "Dorothea Joicey", date: "12 Dec 2017", photo: "img", status: true },
];
const EXERCISE10: React.FC = () => {
  return (
    <div className="flex gap-10 p-10 bg-[#f8f8f8] w-full">
      {/* Sidebar Menu */}
      <div className="w-[20%]">
        <Menu
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="light"
          items={menuItems}
        />
      </div>

      {/* Content */}
      <div className="w-[80%]  rounded-lg p-5 shadow">
        <Tabs defaultActiveKey="1" items={tabItems} onChange={onChange} />

        <div className="flex gap-10">
          {/* Table Users */}
          <div className="mt-4 w-[75%] bg-white p-5 border-1 border-[#efefef] rounded-2xl">
            <h3 className="text-lg font-semibold mb-3">Users Details</h3>
            <div className="overflow-x-auto border rounded-lg ">
              <table className="min-w-full border-collapse mb-5">
                <thead className="bg-gray-100 text-center ">
                  <tr>
                    <th className="p-2 border">
                      <input type="checkbox" />
                    </th>
                    <th className="p-2 border">Photo</th>
                    <th className="p-2 border">Name</th>
                    <th className="p-2 border">Date</th>
                    <th className="p-2 border">Status</th>
                    <th className="p-2 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="p-2 border text-center">
                        <input type="checkbox" />
                      </td>
                      <td className="p-2 border text-center">{user.photo}</td>
                      <td className="p-2 border">{user.name}</td>
                      <td className="p-2 border">{user.date}</td>
                      <td className="p-2 border text-center">
                        <Switch defaultChecked={user.status} />
                      </td>
                      <td className="p-2 border text-center">
                        <Button type="primary" size="small" className="mr-2">
                          Edit
                        </Button>
                        <Button danger size="small">Delete</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-center mt-4 mb-4">
                <Pagination defaultCurrent={1} total={50} />
              </div>

            </div>
          </div>

          {/* Sidebar Filters */}
          <div className="mt-6 space-y-4 w-[25%] bg-white p-5 border-1 border-[#efefef] rounded-2xl">
            <Button type="primary" className="mb-3">
              New User
            </Button>
            <hr />

            <div className="flex gap-6">
              <p>All/32</p>
              <p>Active/16</p>
              <p>Selected/0</p>
            </div>
            <hr />

            <div className="space-y-2">
              <p className="font-medium">Data from - to:</p>
              <p className='bg-[#e9ebef] p-2 text-[#969cac] font-bold'>01 May 21 - 27 May 21</p>
              <p className="font-medium">Search by Name</p>
              <input
                type="text"
                placeholder="Name"
                className="border px-3 py-1 rounded w-60"
              />
            </div>
            <hr />

            <div>
              <p className="font-medium mb-2">Status:</p>
              <div className="space-y-1">
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Disabled
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Active
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Any
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default EXERCISE10;
