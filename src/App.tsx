import { Route, Routes } from "react-router-dom"
import "./App.css"
import Layout from "./features/layout/Layout"
import ErrorPage from "./features/error/ErrorPage"
import Login from "./features/auth/login/Login"
import { Suspense, lazy } from "react"


import ProtectedRoute from "./features/protectedRoute/ProtectedRoute"
import Loader from "./features/loader/Loader"
import HomePage from "./features/homepage/HomePage"

const BeerPage = lazy(() => import("./features/beerPage/BeerPage"))

const BigBeerCard = lazy(
  () => import("./features/beerPage/bigBeerCard/BigBeerCard"),
)

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route
          path="beer"
          element={
            <ProtectedRoute
              outlet={
                <Suspense fallback={<Loader />}>
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
                <Suspense fallback={<Loader />}>
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
