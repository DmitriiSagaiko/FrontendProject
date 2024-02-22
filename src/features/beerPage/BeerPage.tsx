
import React, { useEffect, useState } from "react"
import BeerCard from "./bearCard/BeerCard"

import styles from "./BeerPage.module.css"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getBeer } from "./types/beerAction"


function BeerPage() {
  const { beer } = useAppSelector(state => state.beer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getBeer())
  }, [])
  return (
    <div className={styles.cards}>
      {beer.map(el => (
        <BeerCard
          title={el.name}
          image={el.image_url}
          description={el.tagline}
          key={el.id}
          id={el.id}
        />
      ))}
    </div>
  )
}

export default BeerPage
