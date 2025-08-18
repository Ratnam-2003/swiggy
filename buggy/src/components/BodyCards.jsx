import React, { useEffect, useState } from 'react'
import FoodCard from './FoodCard'
import BodyShimmer from './shimmer/BodyShimmer'

function BodyCards() {
    const [bodyCards,setBodycards]=useState([]);
    const [search,setSearch]=useState('');
    
    async function bodyCardsFetch() {
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.7257642&lng=83.3361327&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const data = await response.json()
    console.log(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)  
     setBodycards(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)  

  }
  useEffect(()=>{
    bodyCardsFetch()
  },[])
  function handleFastDelivery(){
     const fast=bodyCards.filter((x)=>{
       return x.info.sla.deliveryTime<30
    })
    setBodycards(fast)
  }
  function handleTopRatings(){
     const ratings=bodyCards.filter((x)=>{
        return x.info.avgRating>4.2
    })
    setBodycards(ratings)
  }
  function handleSearch(){
     const searching=bodyCards.filter((x)=>{
        return x.info.name.toLowerCase().includes(search.toLowerCase())
    })
    setBodycards(searching)
  }
  if (bodyCards.length == 0) {
    return (
      <BodyShimmer/>
    )   
  }
  else{
        return (
    <div>
      <h3>Restaurants with online food delivery in Vizag</h3>

<div className="button-flex">
        <div>
              <button className='f-btn' onClick={handleFastDelivery}>Fast Delivery</button>
             <button className='f-btn' onClick={handleTopRatings}>ratings 4.5+</button>
        </div>
        <div>
        <input type="search resto" value={search}  onChange={(x)=>{setSearch(x.target.value)}}/>
        <button onClick={handleSearch}>Search</button>  
     </div>
     </div>

      <div className="body-card-flex">
        {
          bodyCards.map((x)=>{
            return <FoodCard data={x}/>
          })
        }
        </div>
    </div>

  )
  
}
}

export default BodyCards;
