import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { combineSlices, configureStore } from "@reduxjs/toolkit"
import { authSlice } from "../features/auth/login/authSlice"
import { beerSlice } from "../features/beerPage/types/beerSlice"

// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.
const rootReducer = combineSlices()
// Infer the `RootState` type from the root reducer

// The store setup is wrapped in `makeStore` to allow reuse
// when setting up tests that need the same store config
// export const makeStore = (preloadedState?: Partial<RootState>) => {
//   const store = configureStore({
//     reducer: {
//       rootReducer,
//       auth: authSlice.reducer,
//       beer: beerSlice.reducer,
//     },
//   })
//   // configure listeners using the provided defaults
//   // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors

//   return store
// }

// export const store = makeStore()

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    beer: beerSlice.reducer,
  },
})



export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

