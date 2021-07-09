// import axios from "../axios";

// import cors from "cors";

export const login = async ({ email, password }) => {
  try {
    const response = await axios({
      url: "http://localhost:5000/api/users/login",
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      data: {
        email,
        password,
      },
    });
    if (response.statusText !== "OK") {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (err) {
    console.log(err.response.data.message);
    return { error: err.response.data.message || err.message };
  }
};
