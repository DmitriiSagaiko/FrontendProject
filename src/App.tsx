import { Route, Routes } from "react-router-dom"
import "./App.css"
import Layout from "./features/layout/Layout"
import ErrorPage from "./features/error/ErrorPage"
import Login from "./features/auth/login/Login"
import { Suspense, lazy } from "react"

import CircularProgress from "@mui/material/CircularProgress"
import ProtectedRoute from "./features/protectedRoute/ProtectedRoute"
import HomePage from "./features/homepage/HomePage"

const BeerPage = lazy(() => import("./features/beerPage/BeerPage"))
// const HomePage = lazy(() => import("./features/homepage/HomePage"))
const BigBeerCard = lazy(
  () => import("./features/beerPage/bigBeerCard/BigBeerCard"),
)

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <ProtectedRoute
              outlet={
                <Suspense fallback={<CircularProgress />}>
                  <HomePage />
                </Suspense>
              }
            />
          }
        />

        <Route
          path="beer"
          element={
            <ProtectedRoute
              outlet={
                <Suspense fallback={<CircularProgress />}>
                  <BeerPage />
                </Suspense>
              }
            />
          }
        />

        <Route
          path="beer/:id"
          element={
            <ProtectedRoute
              outlet={
                <Suspense fallback={<CircularProgress />}>
                  <BigBeerCard />
                </Suspense>
              }
            />
          }
        />

        <Route path="login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}

export default App
