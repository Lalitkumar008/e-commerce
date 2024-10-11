import axios from "axios";
const baseUrl = "http://localhost:3000";
// const baseUrl = "https://e-com-backend-feal.onrender.com";
export const loginUser = (onSuccess, onFailure, values) => {
  axios
    .post(`${baseUrl}/users/login`, { ...values })
    .then((response) => {
      onSuccess(response);
    })
    .catch((error) => {
      onFailure(error);
    });
};

//   console.log("working");
//   fetch("http://localhost:3000/api/auth/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(values),
//   })
//     .then((response) => onSuccess(response))
//     .then((err) => onFailure(err));
// };

export const createUser = (onSuccess, onFailure, values) => {
  axios
    .post(`${baseUrl}/users/register`, { ...values })
    .then((response) => {
      onSuccess(response);
    })
    .catch((error) => {
      onFailure(error);
    });
};

export const getUserInfo = (onSuccess, onFailure, values) => {
  const token = localStorage.getItem("token");
  axios
    .get(`${baseUrl}/users/userinfo`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {
      onSuccess(response);
    })
    .catch((error) => {
      onFailure(error);
    });
};
