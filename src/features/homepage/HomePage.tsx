import { CssBaseline, Icon, ThemeProvider, createTheme } from "@mui/material"
import { motion } from "framer-motion"
import React from "react"
import { useState } from "react"
import LightModeIcon from "@mui/icons-material/LightMode"
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

function HomePage() {


  return (

      <main className="main">
        <h1>На этом сайте будут карточки с пивом</h1>
      </main>
  )
}

export default HomePage
