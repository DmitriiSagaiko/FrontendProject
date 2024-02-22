import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBeer = createAsyncThunk(
    "beer/getBeer",
    async (_, thankAPI) => {
      try {
        const res = await axios.get("https://api.punkapi.com/v2/beers")
        return res.data
      } catch (error: any) {
        return thankAPI.rejectWithValue(error.message)
      }
    },
  )