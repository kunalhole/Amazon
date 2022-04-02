export const initialState = {
  basket: [
    {
      id: "1",
      title: "Iphone 13 Pro Max",
      price: 150,
      rating: 5,
      image:
        "https://imgs.search.brave.com/9Prz556sTiZdPuJCrJpi-kztwO6pu4gsLBdGbNa9rzQ/rs:fit:1200:630:1/g:ce/aHR0cHM6Ly9zdG9y/ZS5zdG9yZWltYWdl/cy5jZG4tYXBwbGUu/Y29tLzQ5ODIvYXMt/aW1hZ2VzLmFwcGxl/LmNvbS9pcy9pcGhv/bmUtMTMtcHJvLW1h/eC1ncmFwaGl0ZS1z/ZWxlY3Q_d2lkPTEy/MDAmaGVpPTYzMCZm/bXQ9anBlZyZxbHQ9/OTUmLnY9MTYzMTY1/Mjk1NjAwMA",
    },
    {
      id: "1",
      title: "Iphone 13 Pro Max",
      price: 150,
      rating: 5,
      image:
        "https://imgs.search.brave.com/9Prz556sTiZdPuJCrJpi-kztwO6pu4gsLBdGbNa9rzQ/rs:fit:1200:630:1/g:ce/aHR0cHM6Ly9zdG9y/ZS5zdG9yZWltYWdl/cy5jZG4tYXBwbGUu/Y29tLzQ5ODIvYXMt/aW1hZ2VzLmFwcGxl/LmNvbS9pcy9pcGhv/bmUtMTMtcHJvLW1h/eC1ncmFwaGl0ZS1z/ZWxlY3Q_d2lkPTEy/MDAmaGVpPTYzMCZm/bXQ9anBlZyZxbHQ9/OTUmLnY9MTYzMTY1/Mjk1NjAwMA",
    },
  ],
  user: null,
}

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0)
const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Logic for adding item in basket.
      return {
        ...state,
        basket: [...state.basket, action.item],
      }
    case "REMOVE_FROM_BASKET":
      //Logic for removing the item from basket.

      let newBasket = [...state.basket]

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      )

      if (index >= 0) {
        //item exist in basket remove it

        newBasket.splice(index, 1)
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket.`
        )
      }

      return { ...state, basket: newBasket }

    default:
      return state
  }
}

export default reducer
