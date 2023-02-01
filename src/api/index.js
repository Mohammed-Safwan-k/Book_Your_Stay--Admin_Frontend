import axios from "axios";

const PORT = process.env.REACT_APP_PORT;

export const fetchCoupons = () =>
  axios.get(`${PORT}/allCoupon`);
export const createCoupons = (newCoupon) =>
  axios.post(`${PORT}/addCoupon`, newCoupon);

export const allUsers = () => axios.get(`${PORT}/allUser`);

export const allFacility = () =>
  axios.get(`${PORT}/allFacilities`);
export const addFacility = (facility) =>
  axios.post(`${PORT}/addFacilities`, facility);

export const viewRoomType = () =>
  axios.get(`${PORT}/allRoom`);
export const addRoomType = (roomtype) =>
  axios.post(`${PORT}/addRoom`, roomtype);
