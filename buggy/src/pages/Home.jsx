import React from 'react'
import Scrollimages from '../components/Scrollimages'
import ScrollCards from '../components/ScrollCards'
import BodyCards from '../components/BodyCards'

function Home() {
  return (
    <div className='home'>
      <Scrollimages/>
      <hr/>
      <ScrollCards/>
      <hr/>
      <BodyCards/>
    </div>
  )
}

export default Home
