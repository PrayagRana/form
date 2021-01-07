import {
  CREATE_USER,
  DELETE_USER,
  GET_USERS,
  UPDATE_USER,
} from "../actions/types";

const initialState = {
  users: [],
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case CREATE_USER:
    case UPDATE_USER:
    case DELETE_USER:
      return {
        ...state,
      };
    default:
      return state;
  }
}
