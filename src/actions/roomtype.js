import * as api from "../api";

//Actions Creators
export const allRoomType = () => async (dispatch) => {
  try {
    const { data } = await api.viewRoomType();

    dispatch({ type: "GET_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addRoomType = (roomtype) => async (dispatch) => {
  try {
    const { data } = await api.addRoomType(roomtype);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
