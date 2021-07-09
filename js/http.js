// export const fetchProducts = async () => {
//   const response = await fetch("http://localhost:5000/api/products");

//   const data = await response.json();

//   return data;
// };

let allProductCheck;

const get = async (herokuURL, localURL) => {
  let response = fetch(herokuURL);
  let check = true;

  try {
    console.log((await response).status);
  } catch {
    check = false;
  }

  if (!check) {
    response = fetch(localURL);
    console.log("Ok");
  }

  const data = await (await response).json();

  if (data) {
    allProductCheck = true;
  } else {
    alert("Something went wrong");
  }
  console.log(allProductCheck);

  return data.data;
};

// const get = async (url) => {
//   const response = await fetch("http://localhost:5000/api/products");

//   console.log(await response.json());
// };

export { get };
