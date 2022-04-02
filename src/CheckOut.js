import React from "react"
import { useStateValue } from "./StateProvider"

import "./CheckOut.css"
import CheckOutProduct from "./CheckOutProduct"
import Subtotal from "./Subtotal"

const CheckOut = () => {
  const [{ basket }] = useStateValue()
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="amazon ad"
        />

        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is Empty.</h2>
            <p>
              You have no items in your basket.To buy one or more items,click on
              "Add to basket" next to item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>

            {/* List of Prodcut which are Add to Cart */}

            {basket?.map((item) => {
              return (
                <CheckOutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              )
            })}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <h1>Subtotal</h1>
          <Subtotal />
        </div>
      )}
    </div>
  )
}

export default CheckOut
