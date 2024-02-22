import { Button } from "@mui/material"
import React from "react"
import { NavLink } from "react-router-dom"

function ErrorPage() {
  return (
    <div>
      <h1>Данная страница не существует!!</h1>
      <NavLink to={"/"}>
        <Button variant="outlined">to home page</Button>
      </NavLink>
    </div>
  )
}

export default ErrorPage
