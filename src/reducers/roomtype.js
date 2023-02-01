const reducer = (roomtype = [], action) => {
  switch (action.type) {
    case "GET_ALL":
      return action.payload;
    case "CREATE":
      return [...roomtype, action.payload];
    default:
      return roomtype;
  }
};

export default reducer;
