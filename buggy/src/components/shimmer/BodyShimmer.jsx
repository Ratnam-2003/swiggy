import React from 'react'

function ImageCard(){
    return <div>
        <div className='gray-box'></div>
    </div>

}

function BodyShimmer() {
  return (
    <div>
      
      <h3>Restaurants with online food delivery in Vizag</h3>
      <div className="body-card-flex">
        <ImageCard/>
        <ImageCard/>
        <ImageCard/>
        <ImageCard/>
        <ImageCard/>
        <ImageCard/>
        <ImageCard/>
        <ImageCard/>
        </div>
    </div>
  )
}

export default BodyShimmer
