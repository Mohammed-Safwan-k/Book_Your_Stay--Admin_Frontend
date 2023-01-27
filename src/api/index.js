import axios from "axios";

const url = "http://localhost:5000/admin/allCoupon";

export const fetchCoupons = () => axios.get(url);
