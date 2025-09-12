export interface IDataTask {
    id: number;
    title: string;
    description: string;
}

export const tasks: IDataTask[] = [
    {
        id: 1,
        title: "Học React Router",
        description: "Làm quen với Dynamic Routes và useNavigate",
    },
    {
        id: 2,
        title: "Ôn lại TailwindCSS",
        description: "Thực hành tạo UI có bản dáng TailwindCSS",
    },
    {
        id: 3,
        title: "Hoàn thành BTM",
        description: "Đẩy code lên GitHub và nộp link",
    },
];