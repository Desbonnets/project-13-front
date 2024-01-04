import { Link, Outlet } from 'react-router-dom';
import logo from '../img/argentBankLogo.png';
import './App.css';

function App() {
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
          <Link className={"main-nav-item"} to={"/login"}>
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
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
