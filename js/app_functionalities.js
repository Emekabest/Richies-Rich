export const currency_sign = (currency) => {
  const signs = {
    naira: "&#8358",
    dollar: "&#36",
  };

  return signs[currency];
};

export const getDiscount = (recent_price, discount_price) => {
  const discount = (recent_price / 100) * discount_price;

  return Math.floor(recent_price - discount);
};

export const awaitTimeout = (code, params) => {
  return setTimeout(() => {
    if (params) {
      code(params);
    } else {
      code();
    }
  }, 1000);
};
