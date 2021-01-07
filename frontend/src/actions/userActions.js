import { CREATE_USER, DELETE_USER, GET_USERS, UPDATE_USER } from "./types";
import axios from "axios";

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/api/user");
    dispatch({ type: GET_USERS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const createUser = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      "http://localhost:5000/api/user",
      formData,
      config
    );
    console.log(res.data);
    dispatch({ type: CREATE_USER });
    alert("User Created");
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = (formData, id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.put(
      "http://localhost:5000/api/user/" + id,
      formData,
      config
    );
    console.log(res.data);
    dispatch({ type: UPDATE_USER });
    alert(" User Updated");
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete("http://localhost:5000/api/user/" + id);
    dispatch({ type: DELETE_USER });
    alert("User deleted");
  } catch (error) {
    console.log(error.message);
  }
};
