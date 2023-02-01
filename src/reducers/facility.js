const reducer = (facility = [], action) => {
  switch (action.type) {
    case "GET_ALL":
      return action.payload;
    case "CREATE":
      return [...facility, action.payload];
    default:
      return facility;
  }
};

export default reducer;
