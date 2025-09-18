const initialListUser = {
    ListUser: [
        {
            id: 1,
            name: "Đoàn Mạnh Duy",
            gender: "Nam",
            date: "28/07/2006",
            address: "Hà Đông, Hà Nội"
        },
        {
            id: 2,
            name: "Nguyễn Văn A",
            gender: "Nam",
            date: "01/01/2000",
            address: "Thanh Xuân, Hà Nội"
        }
    ]
};

export const listUserReducer = (state = initialListUser, action: any) => {
    switch(action.type){
        default: 
        return state;
    }
};
