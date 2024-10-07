import axios from "axios";

export const loginUser = (onSuccess, onFailure, values) => {
  axios
    .post("http://localhost:3000/users/login", { ...values })
    .then((response) => {
      onSuccess(response);
    })
    .catch((error) => {
      onFailure(error);
    });
};

// export const loginUser = (onSuccess, onFailure, values) => {
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
    .post("http://localhost:3000/users/register", { ...values })
    .then((response) => {
      onSuccess(response);
    })
    .catch((error) => {
      onFailure(error);
    });
};
