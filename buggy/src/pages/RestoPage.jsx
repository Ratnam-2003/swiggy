import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'

function RestoItem(props){
  const [count,setCount]=useState(0)
  function handleAddItem(){
     setCount(count+1)
  }
  function handleRemoveItem(){
    setCount(count-1)
  }
  console.log(props.data)
  return(
    <div className='resto-item'>
      <div className='data'>
       <h3>{props.data.card.info.name}</h3>
       <p>{props.data.card.info.price/100}</p>
       <p>{props.data.card.info.ratings.aggregatedRating.rating}({props.data.card.info.ratings.aggregatedRating.ratingCountV2})</p>
       <p>{props.data.card.info.description}</p>
      </div>
      <div className='image-data'>
       <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${props.data.card.info.imageId}`} alt="" />
      <div className='btn-flex'>
        <button onClick={handleRemoveItem}>-</button>
        <p>{count}</p>
        <button onClick={handleAddItem}>+</button>
      </div>
      </div>
    </div>
  )

}
function RestoPage() {
    const [restoItems,setRestoItems]=useState([])
    const {id}=useParams()
    async function restoPageFetch() {
     const response=await fetch (`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.7387744&lng=83.3340645&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
     const result=await response.json()
     setRestoItems(result.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
        
    }
    useEffect(()=>{
      restoPageFetch()
    },[])
  return (
    <div className='resto-page'>
    {
      restoItems.map((x)=>{
        return <RestoItem data={x}/>

      })
    }      
    </div>
  )
}

export default RestoPage
