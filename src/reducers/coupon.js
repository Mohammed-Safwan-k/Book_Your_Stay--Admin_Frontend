const reducer = (coupon = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...coupon, action.payload];
    default:
      return coupon;
  }
};

export default reducer;
