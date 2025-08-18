import React from 'react'
import {Link} from 'react-router-dom'

function FoodCard(props) {
    
  return (
    <div>
      <Link to={`/resto/${props.data.info.id}`}>
       <div className="card">
          <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props.data.info.cloudinaryImageId }`} alt="" />
           <div className="text-box">
            <h3 className='item-name'>{props.data.info.name}</h3>
            <p>{props.data.info.avgRating} .{props.data.info.sla.slaString}</p>
            <p className='item-name'>{props.data.info.cuisines.join(',')}</p>
            <p>{props.data.info.areaName}</p>
           </div>
        </div>
        </Link>
        </div>
    
  )
}

export default FoodCard
