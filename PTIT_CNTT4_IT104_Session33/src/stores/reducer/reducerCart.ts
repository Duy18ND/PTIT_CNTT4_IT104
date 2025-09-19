import { CartItem } from '../../interface/interface';

const initialCart: { cart: CartItem[] } = {
  cart: []
};

type Action =
  | { type: "ADD"; payload: CartItem }
  | { type: "INCREASE" | "DECREASE" | "DELETE"; payload: number };

export const reducerCart = (state = initialCart, action: Action) => {
  let updatedCart: CartItem[];

  switch (action.type) {
    case "ADD":
      const exist = state.cart.find((i) => i.id === action.payload.id);
      if (exist) {
        updatedCart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        updatedCart = [...state.cart, action.payload];
      }
      return { ...state, cart: updatedCart };

    case "INCREASE":
      updatedCart = state.cart.map((item) =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );
      return { ...state, cart: updatedCart };

    case "DECREASE":
      updatedCart = state.cart.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      );
      return { ...state, cart: updatedCart };

    case "DELETE":
      if (confirm("Bạn có chắc xóa không?")) {
        updatedCart = state.cart.filter((item) => item.id !== action.payload);
        return { ...state, cart: updatedCart };
      }
      return state;

    default:
      return state;
  }
};
