import callAPI from "../config/api";

export async function setSignUp(data) {
  const url = "http://localhost:5000/users/signup";

  return callAPI({
    url,
    method: "post",
    data,
  });
}

export async function setLogin(data) {
  const url = "http://localhost:5000/users/login";

  return callAPI({
    url,
    method: "post",
    data,
  });
}
