//setUp data layer
//We need this to track the basket and the information of user
import React, { useContext, useReducer } from "react"

export const StateContext = React.createContext()

// Build a Provider

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

// export to used in the component

export const useStateValue = () => useContext(StateContext)
