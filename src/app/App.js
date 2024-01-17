import { Link, Outlet } from 'react-router-dom';
import logo from '../img/argentBankLogo.png';
import './App.css';
import {useSelector, useStore} from "react-redux";
import {removeUser} from "../features/user/userSlice";
import {useNavigate} from "react-router";

function App() {

  const navigate = useNavigate();

  // redux states
  const {user} = useSelector((state) => state.user);

  const store = useStore();

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
            !user ? 
              <Link className={"main-nav-item"} to={"/login"}>
                <i className="fa fa-user-circle"></i>
                Sign In
              </Link>
            :
              <button className={"main-nav-item"} style={{border:0, backgroundColor:'white'}} onClick={function (){store.dispatch(removeUser()); navigate('/');}}>
                <i className="fa fa-user-circle"></i>
                Logout
              </button>
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
