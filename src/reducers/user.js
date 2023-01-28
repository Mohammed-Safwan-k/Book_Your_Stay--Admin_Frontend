const reducer = (user = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    default:
      return user;
  }
};

export default reducer;
