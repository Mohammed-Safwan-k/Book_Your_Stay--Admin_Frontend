import * as api from "../api";

//Actions Creators
export const allCoupon = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCoupons();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createCoupon = (coupon) => async (dispatch) => {
  try {
    const { data } = await api.createCoupons(coupon);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
