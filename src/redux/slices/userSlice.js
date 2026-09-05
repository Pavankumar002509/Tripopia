import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "",
    email: "",
    phone: "",
    location: "",
    profileImage: "",
  },
};

const userSlice = createSlice({
  name: "user",

  initialState,

  reducers: {
    updateUser: (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },

    updateProfileImage: (state, action) => {
      state.user.profileImage = action.payload;
    },

    clearUser: (state) => {
      state.user = {
        name: "",
        email: "",
        phone: "",
        location: "",
        profileImage: "",
      };
    },
  },
});

export const {
  updateUser,
  updateProfileImage,
  clearUser,
} = userSlice.actions;

export default userSlice.reducer;