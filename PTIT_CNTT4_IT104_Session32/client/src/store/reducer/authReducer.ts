const initialAuth = {
  user: {
    username: "",
    email: "",
    password: ""
  }
};

export const authReducer = (state = initialAuth, action: any) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        user: {
          username: action.payload.username,
          email: action.payload.email,
          password: action.payload.password
        }
      };
    default:
      return state;
  }
};
