import { authLogin, checkActiveUser } from "./authAction";
import type AuthState from "./types/authState";
import { createSlice } from "@reduxjs/toolkit"



const initialState:AuthState = {
  user: undefined,
  isLoading: false,
  error: null
}

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,

  reducers: {
    logoutUser: (state) => {
      state.user = undefined
    }
  },
  extraReducers: (builder) => {
    builder.addCase(authLogin.fulfilled, (state, action) => {
      state.isLoading = false
      state.user = action.payload
    })
    builder.addCase(authLogin.rejected, (state, action) => {
      state.error = action.payload as string
      state.isLoading = false
      state.user = undefined
    })
    builder.addCase(authLogin.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(checkActiveUser.fulfilled, (state, action) => {
      state.user = action.payload
    })
  }
})


export const {logoutUser} = authSlice.actions