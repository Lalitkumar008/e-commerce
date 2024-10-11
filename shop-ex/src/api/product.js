import axios from "axios";
import { useContext } from "react";
import { authContext } from "../context/authContext";
const userId = localStorage.getItem("userId");
const token = localStorage.getItem("token");
const baseUrl = "http://localhost:3000";
// const baseUrl = "https://e-com-backend-feal.onrender.com";
// add to cart product
export const addToCartProduct = (onSuccess, onFailure, id) => {
  console.log(userId);
  axios
    .post(`${baseUrl}/products/addtocart`, {
      headers: userId,
      params: id,
    })
    .then((response) => {
      onSuccess(response);
    })
    .catch((error) => {
      onFailure(error);
    });
};
// show cart items
export const getCartItems = (onSuccess, onFailure) => {
  console.log(userId);
  axios
    .get(`${baseUrl}/products/mycart`, {
      headers: {
        Authorization: token,
      },
      params: {
        userId: userId,
      },
    })
    .then((response) => {
      onSuccess(response);
    })
    .catch((error) => {
      onFailure(error);
    });
};

// create product
export const createProduct = (onSuccess, onFailure, values) => {
  axios
    .post(
      `${baseUrl}/products/create`,
      { ...values },
      {
        headers: {
          "Content-Type": "multipart/form-data", // Important for file upload
        },
      }
    )
    .then((response) => {
      onSuccess(response);
    })
    .catch((error) => {
      onFailure(error);
    });
};
export const getAllProducts = (onSuccess, onFailure) => {
  axios
    .get(`${baseUrl}/products/allproducts`)
    .then((response) => {
      onSuccess(response);
    })
    .catch((error) => {
      onFailure(error);
    });
};
// single product
export const getSingleProductById = (onSuccess, onFailure, id) => {
  axios
    .get(`${baseUrl}/products/singleProduct/${id}`, {})
    .then((response) => {
      onSuccess(response);
    })
    .catch((error) => {
      onFailure(error);
    });
};

// delete product
export const deleteProductById = (onSuccess, onFailure, productId) => {
  axios
    .post(`${baseUrl}/products/deleteproduct/${productId}`, {})
    .then((response) => {
      onSuccess(response);
    })
    .catch((error) => {
      onFailure(error);
    });
};
