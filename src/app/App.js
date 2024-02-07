import { Link, Outlet } from 'react-router-dom';
import logo from '../img/argentBankLogo.png';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {removeUser} from "../features/user/userSlice";
import {useNavigate} from "react-router";
import { getProfile } from '../features/user/userSlice';
import { useEffect } from 'react';

function App() {

  const navigate = useNavigate();

  // redux states
  const {token} = useSelector((state) => state.user);
  const {profile} = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch getProfile action when the component mounts (initial load or reload)
    if(token){
      const userProfil = async () => await dispatch(getProfile(token));
      userProfil();
    }
  }, [dispatch, token]);

  return (
    <>
      <nav className="main-nav">
        <Link to={'/'} className={"main-nav-logo"} >
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {
            !token ? 
              <Link className={"main-nav-item"} to={"/login"}>
                <i className="fa fa-user-circle"></i>
                Sign In
              </Link>
            :
            <div>
              <Link className="main-nav-item" to={`/profile`}>
                <i className="fa fa-user-circle"></i>
                {profile !== null ? profile.firstName : null} {profile !== null ? profile.lastName : null}
              </Link>
              <button className={"main-nav-item"} style={{border:0, backgroundColor:'white'}} onClick={function () {dispatch(removeUser()); navigate('/');}}>
                <i className="fa fa-sign-out"></i>
                Sign Out
              </button>
            </div>
          }
          
        </div>
      </nav>
      <Outlet />
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </>
  );
}

export default App;
