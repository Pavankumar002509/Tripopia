function bookingReducer(state, action) {
  switch (action.type) {
    case "ADD_BOOKING":
      return [
        ...state,
        {
          id: Date.now(),
          ...action.payload,
        },
      ];

    case "UPDATE_BOOKING":
      return state.map((booking) =>
        booking.id === action.payload.id
          ? action.payload
          : booking
      );

    case "DELETE_BOOKING":
      return state.filter(
        (booking) => booking.id !== action.payload
      );

    default:
      return state;
  }
}

export default bookingReducer;  