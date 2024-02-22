import type { PaletteMode } from "@mui/material"
import { Button, CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import styles from "./Header.module.css"
import LogoutIcon from "@mui/icons-material/Logout"
import LightModeIcon from "@mui/icons-material/LightMode"
import NightlightRoundIcon from "@mui/icons-material/NightlightRound"
import { amber, blue, deepOrange, green, grey } from "@mui/material/colors"
import useLocalStorage from "../../app/useLS"
import { increaseCounter } from "../beerPage/types/beerSlice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { checkActiveUser } from "../auth/login/authAction"
import { logoutUser } from "../auth/login/authSlice"

function Header() {
  const [isOn, setIsOn] = useLocalStorage("theme", false)
  const dispatch = useAppDispatch()
  const { user } = useAppSelector(state => state.auth)
  const toggleSwitch = () => {
    dispatch(increaseCounter())
    setIsOn(!isOn)
  }
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token && token.length > 0) {
      dispatch(checkActiveUser())
    }
  }, [])
  const handleLogout = () => {
    localStorage.setItem("token", "")
    dispatch(logoutUser())
  }

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: green[900], // зеленый для темного режима
      },
      secondary: {
        main: blue[200], // голубой для темного режима
      },
      background: {
        default: "#121212",
        paper: "#212121",
      },
      text: {
        primary: "#ffffff",
        secondary: grey[300],
      },
    },
  })
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  })

  return (
    <ThemeProvider theme={isOn ? darkTheme : lightTheme}>
      <CssBaseline />
      <div className={styles.navBar}>
        {user ? (
          <>
            <NavLink to={"/"}>
              <Button variant="outlined">HomePage</Button>
            </NavLink>
            <NavLink to={"beer"}>
              <Button variant="outlined">Beer</Button>
            </NavLink>
            <NavLink to={"login"} onClick={handleLogout}>
              <LogoutIcon fontSize="large" />
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to={"login"}>
              <Button variant="outlined">Login</Button>
            </NavLink>
          </>
        )}
        <div className="switch" data-ison={isOn} onClick={toggleSwitch}>
          {isOn ? <LightModeIcon /> : <NightlightRoundIcon />}
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Header
