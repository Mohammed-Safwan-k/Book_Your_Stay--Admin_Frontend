import axios from "axios";

export const fetchCoupons = () =>
  axios.get(`http://localhost:5000/admin/allCoupon`);
export const createCoupons = (newCoupon) =>
  axios.post(`http://localhost:5000/admin/addCoupon`, newCoupon);

export const allUsers = () => axios.get(`http://localhost:5000/admin/allUser`);

export const allFacility = () =>
  axios.get(`http://localhost:5000/admin/allFacilities`);
export const addFacility = (facility) =>
  axios.post(`http://localhost:5000/admin/addFacilities`, facility);

export const viewRoomType = () =>
  axios.get(`http://localhost:5000/admin/allRoom`);
export const addRoomType = (roomtype) =>
  axios.post(`http://localhost:5000/admin/addRoom`, roomtype);
