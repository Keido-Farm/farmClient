import axios from "axios";
import {
  FARMS_FETCH_FAILED,
  FARMS_FETCH_REQUEST,
  FARMS_FETCH_SUCCESS,
  PERIODS_FETCH_FAILED,
  PERIODS_FETCH_REQUEST,
  PERIODS_FETCH_SUCCESS
} from "./actionType";

const baseUrl = "http://localhost:3000";

export const farmFetchRequest = () => {
  return {
    type: FARMS_FETCH_REQUEST,
  };
};

export const farmFetchSuccess = (data) => {
  return {
    type: FARMS_FETCH_SUCCESS,
    payload: data,
  };
};

export const farmFetchFailed = (error) => {
  return {
    type: FARMS_FETCH_FAILED,
    payload: error,
  };
};

export const periodFetchRequest = () => {
  return {
    type: PERIODS_FETCH_REQUEST,
  };
};

export const periodFetchSuccess = (details,periods) => {
  return {
    type: PERIODS_FETCH_SUCCESS,
    details: details,
    periods: periods
  }
}

export const periodFetchFailed = (error) => {
  return {
    type: PERIODS_FETCH_FAILED,
    payload: error,
  };
};

export const login = async (user) => {
  try {
    const response = await axios.post(`${baseUrl}/users/login`, user);

    if (response.status === 200) {
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("role", response.data.role);
    }
  } catch (error) {
    throw error.response.data.message;
  }
};

export const register = async (user) => {
  try {
    const response = await axios.post(`${baseUrl}/users/registerABK`, user);
  } catch (error) {
    throw error.response.data.message;
  }
};

export const registerAdmin = async (user) => {
  try {
    const response = await axios.post(`${baseUrl}/users/registerAdmin`, user);
  } catch (error) {
    throw error.response.data.message;
  }
};

export const fetchFarmsAsyncSuccess = () => {
  return async (dispatch) => {
    try {
      dispatch(farmFetchRequest());
      const accessToken = localStorage.getItem("access_token");
      const config = {
        headers: {
          access_token: accessToken,
        },
      };

      const response = await axios.get(`${baseUrl}/farmsABK`, config);
      if (response) {
        dispatch(farmFetchSuccess(response.data));
      }
    } catch (err) {
      dispatch(farmFetchFailed(err.response.data.message));
    }
  };
};

export const postDailyReport = async (report) => {
  try {
    const access_token = localStorage.getItem('access_token');
    const headers = {
      access_token: `${access_token}`,
    };

    const response = await axios.post(`${baseUrl}/daily`, report, { headers });
    return response.data.message
  } catch (error) {
    throw error.response.data.message;
  }
};


export const getFarmDetailsAndPeriods = (id) => {
  return async (dispatch) => {
    try {
      dispatch(periodFetchRequest());
      const accessToken = localStorage.getItem("access_token");
      const config = {
        headers: {
          access_token: accessToken,
        },
      };

      const response = await axios.get(`${baseUrl}/farms/${id}`, config);
      if (response) {
        dispatch(periodFetchSuccess(response.data.details,response.data.periods));
      }
    } catch (err) {
      dispatch(periodFetchFailed(err.response.data.message));
    }
  };
};
