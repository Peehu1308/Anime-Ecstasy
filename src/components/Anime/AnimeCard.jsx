import React from 'react'

function AnimeCard({ image_url, title }) {
  return (
    <div className='h-[50vh] w-[300px] bg-cover bg-no-repeat bg-center rounded-xl flex items-end hover:cursor-pointer hover:scale-110 duration-300' style={{ backgroundImage: `url(${image_url})` }}>
      <div className='text-white w-full  text-center font-bold p-3 bg-gray-900/70'>
        <h4>{title}</h4>
      </div>
    </div>
  )
}

export default AnimeCard
