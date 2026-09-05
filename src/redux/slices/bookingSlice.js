import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookings: [],
};

const bookingSlice = createSlice({
  name: "bookings",
  initialState,

  reducers: {
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
    },

    removeBooking: (state, action) => {
      state.bookings = state.bookings.filter(
        (booking) => booking.id !== action.payload
      );
    },

    updateBookingStatus: (state, action) => {
      const booking = state.bookings.find(
        (booking) => booking.id === action.payload.id
      );

      if (booking) {
        booking.status = action.payload.status;
      }
    },

    clearBookings: (state) => {
      state.bookings = [];
    },
  },
});

export const {
  addBooking,
  removeBooking,
  updateBookingStatus,
  clearBookings,
} = bookingSlice.actions;

export default bookingSlice.reducer;