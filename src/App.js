import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import CheckOut from "./CheckOut"
import Login from "./Login"
import Header from "./Header"
import { useStateValue } from "./StateProvider"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebase"

function App() {
  const [{ user }, dispatch] = useStateValue()

  // useEffect Hook for listen whether User is login or not

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        // user is logged in...

        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        // user is logged out...
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })
    return () => {
      unsubscribe()
    }
  }, [])

  console.log("User is >>>", user)

  return (
    <BrowserRouter>
      <div className="app">
        {/* BEM naming convections  */}

        {/* React Router is used for Routing */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />

          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <CheckOut />
              </>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route
            path="/contact"
            element={
              <div>
                <h2>Hello,From Contact Page</h2>
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
