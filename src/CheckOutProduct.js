import React from "react"
import "./CheckOutProduct.css"
import { useStateValue } from "./StateProvider"

const CheckOutProduct = ({ id, title, rating, image, price }) => {
  const [{ basket }, dispatch] = useStateValue()

  const removeFromBasket = () => {
    //remove item from basket...
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    })
  }

  return (
    <div className="checkoutProduct">
      {/* Left part of checkout component */}

      <img className="checkoutProduct__image" src={image} alt="" />

      {/* Rigth Part  */}
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  )
}

export default CheckOutProduct
