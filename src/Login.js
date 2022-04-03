import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { auth } from "./firebase"
import "./Login.css"
const Login = () => {
  // state for storing email and password

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login = (e) => {
    e.preventDefault()

    // here is login logic

    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // here we login successfully and redirect to homepage
        navigate("/")
      })
      .catch((err) => alert(err.message))
  }

  const register = (e) => {
    e.preventDefault()

    // here is the register logic

    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // created a user and logged in,redirect to homepage
        navigate("/")
      })
      .catch((err) => alert(err.message))
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  )
}

export default Login
