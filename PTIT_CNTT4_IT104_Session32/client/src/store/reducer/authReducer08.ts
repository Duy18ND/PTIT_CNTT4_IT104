// authReducer.ts
const initialAuth = {
  user: null,
  isLoggedIn: false
};

export const authReducer08 = (state = initialAuth, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isLoggedIn: false
      };
    default:
      return state;
  }
};
