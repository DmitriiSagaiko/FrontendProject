
import { createSlice } from "@reduxjs/toolkit"
import type BeerType from "./BeerType"
import { getBeer } from "./beerAction"

interface beerState {
    beer: BeerType[]
    isLoading:boolean
    error: string | null | undefined
    counter: number
    
}

const initialState:beerState = {
    beer: [],
    isLoading:false,
    error: null,
    counter: 0
}

export const beerSlice = createSlice({
  name: "beer",
  initialState: initialState,

  reducers: { 
    increaseCounter: (state) => {
      state.counter=state.counter+1
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getBeer.fulfilled, (state, action) => {
      state.isLoading = false
      state.beer = action.payload
    })
    builder.addCase(getBeer.rejected, (state, action) => {
      state.error = action.payload as string
      state.isLoading = false
      state.beer = []
    })
    builder.addCase(getBeer.pending, (state, action) => {
      state.isLoading = true
    })
  }
})


export const {increaseCounter} = beerSlice.actions