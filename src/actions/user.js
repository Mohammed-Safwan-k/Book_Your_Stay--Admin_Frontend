import * as api from "../api";

//Actions Creators
export const allUser = () => async (dispatch) => {
  try {
    const { data } = await api.allUsers();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
