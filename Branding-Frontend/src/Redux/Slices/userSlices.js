import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },

    loginSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      // state.token = payload.token
    },

    loginFailure: (state) => {
      state.loading = false;
      state.error = true;
    },

    logout: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },

    signupPending: (state , action) => {
      state.loading = true;
      
    },
    signupSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    signupFailed: (state, { payload }) => {
      state.loading = false;
      state.error = true;
    },
    updateSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    uploadImgSuccess: (state, action) => {
      state.loading = false;
      state.currentUser.profileImg = action.payload;
    },
    updatePasswordSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
  },
});

export const {
  updateSuccess,
  loginStart,
  loginFailure,
  loginSuccess,
  logout,
  signupPending,
  signupSuccess,
  signupFailed,
  uploadImgSuccess
} = userSlice.actions;

export default userSlice.reducer;
