import { configureStore, applyMiddleware  } from "@reduxjs/toolkit";
import userReducer, { getProfile } from '../features/user/userSlice';
import profileReducer from "../features/profile/ProfileSlice";


const store = configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        (store) => (next) => async (action) => {
            console.log('bonjour');
          if (action.type === '@@INIT') {
            console.log('bonjour');
            await store.dispatch(getProfile());
          }
          return next(action);
        },
      ],
});

export default store;