import { configureStore } from "@reduxjs/toolkit";

import favoriteReducer from "./slices/favoriteSlice";
import bookingReducer from "./slices/bookingSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
    bookings: bookingReducer,
    user: userReducer,
  },
});

export default store;