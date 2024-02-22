import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import type ICredentials from "./types/Credentials"


export const authLogin = createAsyncThunk(
  "auth/login",
  async (userData: ICredentials, thankAPI) => {
    try {
      const res = await axios.post("https://dummyjson.com/auth/login", userData)
      localStorage.setItem("token", res.data.token)
      return res.data
    } catch (error: any) {
      return thankAPI.rejectWithValue(error.message)
    }
  },
)

export const checkActiveUser = createAsyncThunk(
  "auth/checkActiveUser",
  async (_, thankAPI) => {
    try {
      const res = await axios.get('https://dummyjson.com/auth/me', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      return res.data
    } catch (error: any) {
      return thankAPI.rejectWithValue(error.message)
    }
  },
)
