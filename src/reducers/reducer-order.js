const order = {
  articles: [],
  facturation: {},
  delivery: {},
  totalPrice: 0
};
export default (state = order, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return action.payload;
      break;
    case "ADD_INFORMATION_ORDER":
      return action.payload;
      break;
    case "DELETE_ARTICLE_FROM_CART":
      return action.payload;
      break;
    default:
      return state;
  }
};
