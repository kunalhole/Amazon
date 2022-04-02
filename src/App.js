import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import CheckOut from "./CheckOut"
import Login from "./Login"
import Header from "./Header"

function App() {
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
