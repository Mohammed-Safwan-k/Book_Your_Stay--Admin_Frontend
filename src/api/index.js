import axios from "axios";

export const fetchCoupons = () => axios.get(`http://localhost:5000/admin/allCoupon`);
export const createCoupons = (newCoupon) => axios.post(`http://localhost:5000/admin/addCoupon`, newCoupon);

export const allUsers = () => axios.get(`http://localhost:5000/admin/allUser`)
