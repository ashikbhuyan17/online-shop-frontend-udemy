import { LOGGED_IN_USER, LOGOUT } from "../actions/user/userActionTypes";

let initialState = {
  email: "",
  name: "",
  token: "",
  role: "",
  _id: ""
}

export const userReducer = (state = null, action) => {
  switch (action.type) {
    case LOGGED_IN_USER:
      return action.payload
    // return {
    //   ...state,
    //   email: action.payload.email,
    //   name: action.payload.name,
    //   token: action.payload.token,
    //   role: action.payload.role,
    //   _id: action.payload._id,
    // };
    case LOGOUT:
      return action.payload;
    default:
      return state;
  }
};
