import { useReducer, useState } from "react";
import authContext from "./AuthContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.medicine === action.item.medicine
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
};

const CartProvider = (props) => {
  const localtoken = localStorage.getItem("token");
  const [token, setToken] = useState(localtoken);
  const userIsLoggedIn = !!token;

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const loginHandler = (token) => {
    localStorage.setItem("token", token);
    setToken(true);
  };
  const displayNameHandler = (name) => {
    localStorage.setItem("name", name);
  };
  const logoutHandler = (token) => {
    localStorage.removeItem("name");
    setToken(null);
  };
  const context = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    displayName: displayNameHandler,
    verifyEmail: false,
    items: cartState.items,
    additem: addItemToCartHandler,
  };
  return (
    <authContext.Provider value={context}>
      {props.children}
    </authContext.Provider>
  );
};

export default CartProvider;
