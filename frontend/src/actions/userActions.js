import axios from "axios";

import {
   LOGIN_REQUESTS,
   LOGIN_SUCCESS,
   LOGIN_FAIL,
   REGISTER_REQUESTS,
   REGISTER_SUCCESS,
   REGISTER_FAIL,
   LOAD_USER_REQUESTS,
   LOAD_USER_SUCCESS,
   LOAD_USER_FAIL,
   UPDATE_PROFILE_REQUESTS,
   UPDATE_PROFILE_SUCCESS,
   UPDATE_PROFILE_FAIL,
   UPDATE_PASSWORD_REQUESTS,
   UPDATE_PASSWORD_SUCCESS,
   UPDATE_PASSWORD_FAIL,
   LOGOUT_SUCCESS,
   LOGOUT_FAIL,
   FORGOT_PASSWORD_REQUESTS,
   FORGOT_PASSWORD_SUCCESS,
   FORGOT_PASSWORD_FAIL,
   NEW_PASSWORD_REQUESTS,
   NEW_PASSWORD_SUCCESS,
   NEW_PASSWORD_FAIL,
   ALL_USERS_REQUESTS,
   ALL_USERS_SUCCESS,
   ALL_USERS_FAIL,
   USER_DETAILS_REQUESTS,
   USER_DETAILS_SUCCESS,
   USER_DETAILS_FAIL,
   UPDATE_USER_REQUESTS,
   UPDATE_USER_SUCCESS,
   UPDATE_USER_FAIL,
   DELETE_USER_REQUESTS,
   DELETE_USER_SUCCESS,
   DELETE_USER_FAIL,
   CLEAR_ERRORS,
} from "../constants/userConstants";

// Login
export const login = (email, password) => async (dispatch) => {
   try {
      dispatch({ type: LOGIN_REQUESTS });

      const config = {
         headers: {
            "Content-Type": "application/json",
         },
      };
      const { data } = await axios.post(
         "/api/v1/login",
         { email, password },
         config
      );

      dispatch({
         type: LOGIN_SUCCESS,
         payload: data.user,
      });
   } catch (error) {
      dispatch({
         type: LOGIN_FAIL,
         payload: error.response.data.message,
      });
   }
};

// Register user
export const register = (userData) => async (dispatch) => {
   try {
      dispatch({ type: REGISTER_REQUESTS });

      const config = {
         headers: {
            "Content-Type": "multipart/form-data",
         },
      };
      const { data } = await axios.post("/api/v1/register", userData, config);

      dispatch({
         type: REGISTER_SUCCESS,
         payload: data.user,
      });
   } catch (error) {
      dispatch({
         type: REGISTER_FAIL,
         payload: error.response.data.message,
      });
   }
};

// Load user
export const loadUser = () => async (dispatch) => {
   try {
      dispatch({ type: LOAD_USER_REQUESTS });

      const { data } = await axios.get("/api/v1/me");

      dispatch({
         type: LOAD_USER_SUCCESS,
         payload: data.user,
      });
   } catch (error) {
      dispatch({
         type: LOAD_USER_FAIL,
         payload: error.response.data.message,
      });
   }
};

// Update profile
export const updateProfile = (userData) => async (dispatch) => {
   try {
      dispatch({ type: UPDATE_PROFILE_REQUESTS });

      const config = {
         headers: {
            "Content-Type": "multipart/form-data",
         },
      };
      const { data } = await axios.put("/api/v1/me/update", userData, config);

      dispatch({
         type: UPDATE_PROFILE_SUCCESS,
         payload: data.success,
      });
   } catch (error) {
      dispatch({
         type: UPDATE_PROFILE_FAIL,
         payload: error.response.data.message,
      });
   }
};

// Update password
export const updatePassword = (passwords) => async (dispatch) => {
   try {
      dispatch({ type: UPDATE_PASSWORD_REQUESTS });

      const config = {
         headers: {
            "Content-Type": "application/json",
         },
      };
      const { data } = await axios.put(
         "/api/v1/password/update",
         passwords,
         config
      );

      dispatch({
         type: UPDATE_PASSWORD_SUCCESS,
         payload: data.success,
      });
   } catch (error) {
      dispatch({
         type: UPDATE_PASSWORD_FAIL,
         payload: error.response.data.message,
      });
   }
};

// Forgot password
export const forgotPassword = (email) => async (dispatch) => {
   try {
      dispatch({ type: FORGOT_PASSWORD_REQUESTS });

      const config = {
         headers: {
            "Content-Type": "application/json",
         },
      };
      const { data } = await axios.post(
         "/api/v1/password/forgot",
         email,
         config
      );

      dispatch({
         type: FORGOT_PASSWORD_SUCCESS,
         payload: data.message,
      });
   } catch (error) {
      dispatch({
         type: FORGOT_PASSWORD_FAIL,
         payload: error.response.data.message,
      });
   }
};

// Reset password
export const resetPassword = (token, passwords) => async (dispatch) => {
   try {
      dispatch({ type: NEW_PASSWORD_REQUESTS });

      const config = {
         headers: {
            "Content-Type": "application/json",
         },
      };
      const { data } = await axios.put(
         `/api/v1/password/reset/${token}`,
         passwords,
         config
      );

      dispatch({
         type: NEW_PASSWORD_SUCCESS,
         payload: data.success,
      });
   } catch (error) {
      dispatch({
         type: NEW_PASSWORD_FAIL,
         payload: error.response.data.message,
      });
   }
};

// Logout user
export const logout = () => async (dispatch) => {
   try {
      await axios.get("/api/v1/logout");

      dispatch({
         type: LOGOUT_SUCCESS,
      });
   } catch (error) {
      dispatch({
         type: LOGOUT_FAIL,
         payload: error.response.data.message,
      });
   }
};

// Get All user (ADMIN)
export const allUsers = () => async (dispatch) => {
   try {
      dispatch({ type: ALL_USERS_REQUESTS });

      const { data } = await axios.get("/api/v1/admin/users");

      dispatch({
         type: ALL_USERS_SUCCESS,
         payload: data.users,
      });
   } catch (error) {
      dispatch({
         type: ALL_USERS_FAIL,
         payload: error.response.data.message,
      });
   }
};

// Update User (ADMIN)
export const updateUser = (id, userData) => async (dispatch) => {
   try {
      dispatch({ type: UPDATE_USER_REQUESTS });

      const config = {
         headers: {
            "Content-Type": "application/json",
         },
      };
      const { data } = await axios.put(
         `/api/v1/admin/user/${id}`,
         userData,
         config
      );

      dispatch({
         type: UPDATE_USER_SUCCESS,
         payload: data.success,
      });
   } catch (error) {
      dispatch({
         type: UPDATE_USER_FAIL,
         payload: error.response.data.message,
      });
   }
};

// Get user details (ADMIN)
export const getUserDetails = (id) => async (dispatch) => {
   try {
      dispatch({ type: USER_DETAILS_REQUESTS });

      const { data } = await axios.get(`/api/v1/admin/user/${id}`);

      dispatch({
         type: USER_DETAILS_SUCCESS,
         payload: data.user,
      });
   } catch (error) {
      dispatch({
         type: USER_DETAILS_FAIL,
         payload: error.response.data.message,
      });
   }
};

// Delete user (ADMIN)
export const deleteUser = (id) => async (dispatch) => {
   try {
      dispatch({ type: DELETE_USER_REQUESTS });

      const { data } = await axios.delete(`/api/v1/admin/user/${id}`);

      dispatch({
         type: DELETE_USER_SUCCESS,
         payload: data.success,
      });
   } catch (error) {
      dispatch({
         type: DELETE_USER_FAIL,
         payload: error.response.data.message,
      });
   }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
   dispatch({
      type: CLEAR_ERRORS,
   });
};
