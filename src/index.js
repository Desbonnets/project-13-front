import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './routes/Home';
import Login from './routes/Login';
import Profile from './routes/Profile';
import Error404 from './routes/Error404';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './app/store';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: rootLoader,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: homeLoader,
      },
      {
        path: "/login",
        element: <Login />,
        // loader: homeLoader,
      },
      {
        path: "/profile",
        element: <Profile />,
        // loader: homeLoader,
      },
      {
        path: "*",
        element: <Error404 />,
        // loader: homeLoader,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
