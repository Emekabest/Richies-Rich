// import axios from "../axios";

import { getUserInfo } from "./localStorage.js";

// import cors from "cors";

export const login = async ({ email, password }) => {
  try {
    const response = await axios({
      url: "http://localhost:5000/api/users/login",
      method: "POST",
      headers: {
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

export const register = async ({ name, email, password }) => {
  try {
    const response = await axios({
      url: "http://localhost:5000/api/users/register",
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      data: {
        name,
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

export const update = async ({ name, email, password }) => {
  try {
    const { _id, token } = getUserInfo();
    const response = await axios({
      url: `http://localhost:5000/api/users/${_id}`,
      method: "PUT",
      header: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        name,
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
