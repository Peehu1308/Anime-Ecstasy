import React from 'react'

function AnimeCard({ image_url, title, handleAddToWatchList, animeObj, handleRemoveFromWatchList, watchList }) {

  function isContain(animeObj) {
    for (let i = 0; i < watchList.length; i++) {
      console.log(watchList[i].mal_id,animeObj.mal_id);
      if (watchList[i].mal_id == animeObj.mal_id) {
        return true
      }
    }
      return false
  }

  return (
    <div className='h-[50vh] w-[300px] bg-cover bg-no-repeat bg-center rounded-xl justify-between flex flex-col items-end hover:cursor-pointer hover:scale-110 duration-300' style={{ backgroundImage: `url(${image_url})` }}>
      {isContain(animeObj)
        ?
        (<div onClick={() => { handleRemoveFromWatchList(animeObj) }} className='flex justify-center h-8 w-8 bg-gray-800 items-center rounded-lg'>&#10060;</div>)
        : 
        (<div onClick={() => { handleAddToWatchList(animeObj) }} className='flex justify-center h-8 w-8 bg-gray-800 items-center rounded-lg'>
          &#128525;
        </div>)}


      <div className='text-white w-full  text-center font-bold p-3 bg-gray-900/70 rounded-br-lg rounded-bl-lg'>
        {title}
      </div>

    </div>
  )
}

export default AnimeCard
