import axios from "axios";
import { useContext } from "react";
import { authContext } from "../context/authContext";
const userId = localStorage.getItem("userId");

// add to cart product
export const addToCartProduct = (onSuccess, onFailure, id) => {
  console.log(userId);
  axios
    .post("https://e-com-backend-feal.onrender.com/products/addtocart", {
      headers: "6703f5c567b2709e5d0b900a",
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
    .get("https://e-com-backend-feal.onrender.com/products/mycart", {
      headers: {
        userId: "6703f5c567b2709e5d0b900a",
      },
    })
    .then((response) => {
      onSuccess(response);
    })
    .catch((error) => {
      onFailure(error);
    });
};

export const createProduct = (onSuccess, onFailure, values) => {
  axios
    .post(
      "https://e-com-backend-feal.onrender.com//products/create",
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
    .get("https://e-com-backend-feal.onrender.com/products/allproducts")
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
    .get("https://e-com-backend-feal.onrender.com/products/singleProduct", {
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

export const deleteProductById = (onSuccess, onFailure, productId) => {
  axios
    .post(
      "https://e-com-backend-feal.onrender.com/products/deleteproduct",
      productId
    )
    .then((response) => {
      onSuccess(response);
    })
    .catch((error) => {
      onFailure(error);
    });
};
