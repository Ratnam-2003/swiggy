import React from 'react'
import FoodCard from './FoodCard'
import { useState,useEffect } from 'react'
import ImageShimmer from './shimmer/ImageShimmer'

function ScrollCards() {
  const [cards,setCards]=useState([])
  async function cardsFetch() {
    const response=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.7257642&lng=83.3361327&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const data= await response.json()
    console.log(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    setCards(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)  
  }
  useEffect(()=>{
    cardsFetch()
  },[])
   if (cards.length == 0) {
    return <>
      <ImageShimmer/>
      </>
  }
  else{
      return (
    <div>
      <h3>Top restaurant chains in Vizag</h3>
      <div className="card-flex">
        {
          cards.map((x)=>{
            return <FoodCard data={x}/>
          })
        }
        </div>
    </div>
  )

  }
}

export default ScrollCards
