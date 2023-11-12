import {
  ITEMS_FETCH_FAILED,
  ITEMS_FETCH_REQUEST,
  ITEMS_FETCH_SUCCESS,
  ITEMSBYID_FETCH_SUCCESS,
  CATEGORY_FETCH_SUCCESS
} from "./actionType";
import axios from 'axios';
const baseUrl = "http://localhost:3000";
// const baseUrl = "http://18.136.203.143";

export const login = async (user) => {
  try {
    const response = await axios.post(`${baseUrl}/users/login`, user);

    if (response.status === 200) {
      localStorage.setItem('access_token', response.data.access_token);
      localStorage.setItem('role',response.data.role)
    } 

  } catch (error) {
    throw error.response.data.message
  }
};

export const register = async (user) => {
  try {
    const response = await axios.post(`${baseUrl}/users/registerABK`, user);
  } catch (error) {
    throw error.response.data.message
  }
};


