import React, { useEffect, useState } from "react"
import styles from "./BeerCard.module.css"
import { Link, Navigate } from "react-router-dom"
import { useMediaQuery, useTheme } from "@mui/material"
import useLocalStorage from "../../../app/useLS"
import { useAppSelector } from "../../../app/hooks"
interface Props {
  title: string
  description: string
  image: string
  id: number
}

function BeerCard(props: Props): JSX.Element {
  const {counter} = useAppSelector(
    (state) => state.beer
  )
  function getTheme() {
    const data = localStorage.getItem("theme")
    return data
  }
  const [theme, setTheme] = useState<string | null>(getTheme())
  useEffect(() => {
    setTheme(getTheme())
  },[counter])

  return (
    <div className={styles.cardWrapper}>
      <Link to={String(props.id)}>
        <div className={styles.card} data-color={theme} key={counter}>
          <h4>{props.title}</h4>
          <div className={styles.imgWrapper}>
            <img src={props.image} alt="beers photo" />
          </div>
          <p>{props.description}</p>
        </div>
      </Link>
    </div>
  )
}

export default BeerCard
