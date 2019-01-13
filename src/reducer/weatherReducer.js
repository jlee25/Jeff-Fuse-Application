export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_WEATHER":
      return { ...state, data: action.payload };
    default:
      return state;
  }
}