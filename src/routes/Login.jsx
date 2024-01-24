import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/user/userSlice';
import {Navigate, useNavigate} from "react-router";
import Loading from "../components/Loading";
import { getProfil } from "../features/profile/ProfileSlice";

function Login() {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [remember, setRemember] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // redux states
  const {loading, token, error} = useSelector((state) => state.user);

  if(token !== null) return <Navigate to={'/'} />;

  /**
   * 
   * @param {Event} e 
   */
  const submitLogin = (e) => {

    e.preventDefault();

    let userCredentials= {
      email, password, remember
    }
    dispatch(loginUser(userCredentials)).then((result) => {
      if(result.payload){
          setEmail(null);
          setPassword(null);
          // dispatch(getProfil(result.payload.body.token));
          navigate('/');
      }
  });
  }

  return (
    <main className="main bg-dark">
      {loading ? (<Loading />) : null}
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form id="login" onSubmit={submitLogin}>
          {error !== null ? <div id="alert" style={{marginBottom: '20px'}}>
            <div id="fr-alert-:rd:" className="fr-alert fr-alert--error fr-alert--sm" role="alert">
              <h3 className="fr-alert__title">{error}</h3>
            </div>
          </div> : null }
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