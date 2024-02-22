import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import styles from "./BigBeerCard.module.css"
import type BeerType from "../types/BeerType"
import { Button } from "@mui/material"

function BigBeerCard() {
  const { id } = useParams()
  const [data, setData] = useState<BeerType>()

  async function getOneBeer() {
    const res = await fetch("https://api.punkapi.com/v2/beers/" + id)
    const result = await res.json()
    setData(result[0])
  }
  useEffect(() => {
    getOneBeer()
  }, [])

  return (
    <div className={styles.bigBeerCard}>
      <h1 className={styles.h1}>Beer: {data?.name}</h1>
      <div className={styles.imgWrapper}>
        <img src={data?.image_url} alt="beers photo" />
      </div>
      <p><b>Produced by</b> {data?.contributed_by}</p>
      <p><b>Description:</b> {data?.description}</p>
      <p><b>Tips:</b> {data?.brewers_tips}</p>
      <p><b>Good flavor with</b> {data?.food_pairing.map(el => el + ", ")}</p>
      <p><b>First time brewed in</b> {data?.first_brewed}</p>
      <Link to={"/beer"} className={styles.button}>
        <Button variant="contained">Back to Beer</Button>
      </Link>
    </div>
  )
}

export default BigBeerCard
