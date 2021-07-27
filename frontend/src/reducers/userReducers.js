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
   LOGOUT_SUCCESS,
   LOGOUT_FAIL,
   UPDATE_PROFILE_REQUESTS,
   UPDATE_PROFILE_SUCCESS,
   UPDATE_PROFILE_RESET,
   UPDATE_PROFILE_FAIL,
   UPDATE_PASSWORD_REQUESTS,
   UPDATE_PASSWORD_SUCCESS,
   UPDATE_PASSWORD_RESET,
   UPDATE_PASSWORD_FAIL,
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
   UPDATE_USER_RESET,
   UPDATE_USER_FAIL,
   DELETE_USER_REQUESTS,
   DELETE_USER_SUCCESS,
   DELETE_USER_RESET,
   DELETE_USER_FAIL,
   CLEAR_ERRORS,
} from "../constants/userConstants";

export const authReducer = (state = { user: {} }, action) => {
   switch (action.type) {
      case LOGIN_REQUESTS:
      case REGISTER_REQUESTS:
      case LOAD_USER_REQUESTS:
         return {
            loading: true,
            isAuthenticated: false,
         };
      case LOGIN_SUCCESS:
      case REGISTER_SUCCESS:
      case LOAD_USER_SUCCESS:
         return {
            ...state,
            loading: false,
            isAuthenticated: true,
            user: action.payload,
         };

      case LOGOUT_SUCCESS:
         return {
            loading: false,
            isAuthenticated: false,
            user: null,
         };
      case LOAD_USER_FAIL:
         return {
            loading: false,
            isAuthenticated: false,
            user: null,
            error: action.payload,
         };
      case LOGOUT_FAIL:
         return {
            ...state,
            loading: false,
            isAuthenticated: false,
            error: action.payload,
         };
      case LOGIN_FAIL:
      case REGISTER_FAIL:
         return {
            ...state,
            loading: false,
            isAuthenticated: false,
            user: null,
            error: action.payload,
         };
      case CLEAR_ERRORS:
         return {
            ...state,
            error: null,
         };
      default:
         return state;
   }
};

export const userReducer = (state = {}, action) => {
   switch (action.type) {
      case UPDATE_PROFILE_REQUESTS:
      case UPDATE_PASSWORD_REQUESTS:
      case UPDATE_USER_REQUESTS:
      case DELETE_USER_REQUESTS:
         return {
            ...state,
            loading: true,
         };
      case UPDATE_PROFILE_SUCCESS:
      case UPDATE_PASSWORD_SUCCESS:
      case UPDATE_USER_SUCCESS:
         return {
            ...state,
            loading: false,
            isUpdated: action.payload,
         };
      case DELETE_USER_SUCCESS:
         return {
            ...state,
            loading: false,
            isDeleted: action.payload,
         };
      case UPDATE_PROFILE_RESET:
      case UPDATE_PASSWORD_RESET:
      case UPDATE_USER_RESET:
         return {
            ...state,
            isUpdated: false,
         };
      case DELETE_USER_RESET:
         return {
            ...state,
            isDeleted: false,
         };
      case UPDATE_PROFILE_FAIL:
      case UPDATE_PASSWORD_FAIL:
      case UPDATE_USER_FAIL:
      case DELETE_USER_FAIL:
         return {
            ...state,
            loading: false,
            error: action.payload,
         };
      case CLEAR_ERRORS:
         return {
            ...state,
            error: null,
         };

      default:
         return state;
   }
};

export const forgotPasswordReducer = (state = {}, action) => {
   switch (action.type) {
      case FORGOT_PASSWORD_REQUESTS:
      case NEW_PASSWORD_REQUESTS:
         return {
            ...state,
            loading: true,
            error: null,
         };
      case FORGOT_PASSWORD_SUCCESS:
         return {
            ...state,
            loading: false,
            message: action.payload,
         };
      case NEW_PASSWORD_SUCCESS:
         return {
            ...state,
            success: action.payload,
         };
      case FORGOT_PASSWORD_FAIL:
      case NEW_PASSWORD_FAIL:
         return {
            ...state,
            loading: false,
            error: action.payload,
         };
      case CLEAR_ERRORS:
         return {
            ...state,
            error: null,
         };

      default:
         return state;
   }
};

export const allUsersReducer = (state = { users: [] }, action) => {
   switch (action.type) {
      case ALL_USERS_REQUESTS:
         return {
            ...state,
            loading: true,
         };
      case ALL_USERS_SUCCESS:
         return {
            ...state,
            loading: false,
            users: action.payload,
         };
      case ALL_USERS_FAIL:
         return {
            ...state,
            loading: false,
            error: action.payload,
         };
      case CLEAR_ERRORS:
         return {
            ...state,
            error: null,
         };

      default:
         return state;
   }
};

export const userDetailsReducer = (state = { user: {} }, action) => {
   switch (action.type) {
      case USER_DETAILS_REQUESTS:
         return {
            ...state,
            loading: true,
         };
      case USER_DETAILS_SUCCESS:
         return {
            ...state,
            loading: false,
            user: action.payload,
         };
      case USER_DETAILS_FAIL:
         return {
            ...state,
            loading: false,
            error: action.payload,
         };
      case CLEAR_ERRORS:
         return {
            ...state,
            error: null,
         };

      default:
         return state;
   }
};
