import React from 'react'
import { useState, useEffect } from 'react'
import ImageShimmer from './shimmer/ImageShimmer'

function Scrollimages() {
  const [images, setImages] = useState([])
  async function swiggyImages() {
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.7257642&lng=83.3361327&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const data = await response.json()
    console.log(data.data.cards[0].card.card.imageGridCards.info)
    setImages(data.data.cards[0].card.card.imageGridCards.info)
  }
  useEffect(() => {
    swiggyImages()

  }, [])
  if (images.length == 0) {
    return <>
      <ImageShimmer/>
      </>
  }
  else {
    return (
      <>
        <h2>CHINNI, What's on your mind?</h2>
        <div className='scroll'>
          {
            images.map((x) => {
              return (
                <div>
                  <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${x.imageId}`} alt="" />
                </div>
              )
            })
          }

        </div>
      </>
    )

  }

}

export default Scrollimages
