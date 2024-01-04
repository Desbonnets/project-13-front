import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/user/userSlice'

function Login() {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [remember, setRemember] = useState(null);

  const dispatch = useDispatch();
  /**
   * 
   * @param {Event} e 
   */
  const submitLogin = (e) => {

    e.preventDefault();

    let userCredentials= {
      email, password
    }
    dispatch(loginUser(userCredentials));
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form id="login" onSubmit={submitLogin}>
          <div className="input-wrapper">
            <label htmlFor="username">Username </label>
            <input type="text" id="username" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" onChange={(e) => setRemember(e.target.value)}/>
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
          {/* <a href="./user.html" className="sign-in-button">Sign In</a> */}
          {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default Login;