import axios from "axios";

export const createProduct = (onSuccess, onFailure, values) => {
  axios
    .post(
      "http://localhost:3000/products/create",
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
    .get("http://localhost:3000/products/allproducts")
    .then((response) => {
      onSuccess(response);
    })
    .catch((error) => {
      onFailure(error);
    });
};
export const deleteProductById = (onSuccess, onFailure, productId) => {
  axios
    .post("http://localhost:3000/products/deleteproduct", productId)
    .then((response) => {
      onSuccess(response);
    })
    .catch((error) => {
      onFailure(error);
    });
};
