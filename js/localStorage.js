export const getCartItems = () => {
  const cartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

  return cartItems;
};

export const setCartItems = (cartItems) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const setUserInfo = ({
  _id = "",
  name = "",
  isAdmin = false,
  email = "",
  password = "",
  token = "",
}) => {
  localStorage.setItem(
    "userInfo",
    JSON.stringify({ _id, name, email, password, token, isAdmin })
  );
};

export const getUserInfo = () => {
  return localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : { name: "", email: "", password: "" };
};

export const clearUserInfo = () => {
  localStorage.removeItem("userInfo");
};

export const setShippingInfo = ({
  address = "",
  city = "",
  postalcode = "",
  country = "",
}) => {
  localStorage.setItem(
    "shippingInfo",
    JSON.stringify({ address, city, postalcode, country })
  );
};

export const getShippingInfo = () => {
  return localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo"))
    : { address: "kwilikwili", city: "", postalcode: "", country: "" };
};

export const setPayment = ({ payment_method = "" }) => {
  localStorage.setItem("payment-method", JSON.stringify({ payment_method }));
};

export const getPayment = () => {
  return localStorage.getItem("payment-method")
    ? JSON.parse(localStorage.getItem("payment-method"))
    : { payment_method: "" };
};

export const cleanCart = () => {
  localStorage.removeItem("cartItems");
};
