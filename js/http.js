// export const fetchProducts = async () => {
//   const response = await fetch("http://localhost:5000/api/products");

//   const data = await response.json();

//   return data;
// };

const get = async (url) => {
  const response = fetch(url);
  const data = await (await response).json();

  return data.data;
};

// const get = async (url) => {
//   const response = await fetch("http://localhost:5000/api/products");

//   console.log(await response.json());
// };

export { get };
