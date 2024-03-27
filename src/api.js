import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://localhost:5000" });
// https://zidio-location-tracker-backend.onrender.com/

export const signupAPI = async (body) => {
  // const body = {firstName: "", lastName: "", email: "", password: ""}
  try {
    const { data } = await axiosInstance.post("/user/signup", body);
    return { data };
  } catch (error) {
    return { error: error.response.data };
  }
};

export const loginAPI = async (body) => {
  // const body = { email: "", password: ""}
  try {
    const { data } = await axiosInstance.post("/user/login", body);
    return { data };
  } catch (error) {
    return { error: error.response.data };
  }
};

export const autoLoginAPI = async () => {
  try {
    const { data } = await axiosInstance.get("/user");
    return { data };
  } catch (error) {
    return { error: error.response.data };
  }
};

export const createLocationAPI = async (body) => {
  // const body = {longitude: 40, latitude: 130}
  // User must be login
  try {
    const { data } = await axiosInstance.post("/location", body);
    return { data };
  } catch (error) {
    return { error: error.response.data };
  }
};

export const getLocationsAPI = async () => {
  try {
    const { data } = await axiosInstance.get("/location");
    return { data };
  } catch (error) {
    return { error: error.response.data };
  }
};
