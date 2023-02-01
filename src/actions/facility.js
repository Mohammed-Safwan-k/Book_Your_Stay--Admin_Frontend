import * as api from "../api";

//Actions Creators
export const viewFacility = () => async (dispatch) => {
  try {
    const { data } = await api.allFacility();

    dispatch({ type: "GET_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const newFacility = (facility) => async (dispatch) => {
  try {
    const { data } = await api.addFacility(facility);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
