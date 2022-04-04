import {
  CARD_ADD_ITEM,
  CARD_REMOVE_ITEM,
  CARD_SAVE_SHIPPING_ADDRESS,
  CARD_SAVE_PAYMENT_METHOD,
} from "../constants/cardConstants";

export const cardReducer = (
  state = { cardItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case CARD_ADD_ITEM:
      const item = action.payload;

      const existItem = state.cardItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cardItems: state.cardItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cardItems: [...state.cardItems, item],
        };
      }
    case CARD_REMOVE_ITEM:
      return {
        ...state,
        cardItems: state.cardItems.filter((x) => x.product !== action.payload),
      };
    case CARD_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case CARD_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    default:
      return state;
  }
};
