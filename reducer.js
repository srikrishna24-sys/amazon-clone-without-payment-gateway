export const initialState = {
  basket: [],
  user: null,
};

// Selector
export const getbaskettotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0); //basically iterates through basket elements and adds to amount their prices 0 is initial val of amount syntax imp

const reducer = (state, action) => {
  //console.log(action); //says type is ADD_TO_BASKET

  switch (action.type) {
    case "ADD_TO_BASKET": //when u click add to basket button
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user, //updates user
      };

    default:
      return state;
  }
};
export default reducer;

//how does add to basket get pushed in data layer is checked by reducer
