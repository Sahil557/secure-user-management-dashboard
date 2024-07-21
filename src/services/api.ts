import axios from "axios";

const API_URL = process.env.REACT_APP_BASE_URL;

export const loginUser = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

export const registerUser = async (name: string, job: string) => {
  const response = await axios.post(`${API_URL}/users`, { name, job });
  return response.data;
};
