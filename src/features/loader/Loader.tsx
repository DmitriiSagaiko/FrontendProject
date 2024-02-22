import React from "react"
import styles from "./Loader.module.css"
import CircularProgress from "@mui/material/CircularProgress"

function Loader() {
  return (
    <div className={styles.loader}>
      <CircularProgress />
    </div>
  )
}

export default Loader
