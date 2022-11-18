import axios from "axios";

export async function setSignUp(data) {
  const response = await axios.post("http://localhost:5000/users/signup", data);
  if (response.status > 300) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    }
    return res;
  }
  const res = {
    error: false,
    message:response.data.message,
    data: response.data.data,
  }
  return res;
}

export async function setLogin(data) {
  const response = await axios.post("http://localhost:5000/users/login", data);
  if (response.status > 300) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    }
    return res;
  }
  const res = {
    error: false,
    message:response.data.message,
    data: response.data.data,
  }
  return res;
}
