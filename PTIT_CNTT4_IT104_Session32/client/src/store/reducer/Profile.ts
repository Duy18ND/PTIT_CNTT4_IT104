const initialProfile = {
        user: {
            id: 1,
            name: "Đoàn Mạnh Duy",
            gender: "Nam",
            date: "28/07/2006",
            address: "Hà Đông, Hà Nội"
        }
};

export const userReducer = (state = initialProfile, action: any) => {
    switch(action.type){
        default: 
        return state;
    }
};
