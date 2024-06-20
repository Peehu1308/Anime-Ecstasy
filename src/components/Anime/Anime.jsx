import React, { useEffect, useState } from 'react'
import Banner from './Banner.jsx'
import axios from 'axios'
import AnimeCard from './AnimeCard.jsx';
import Pagination from '../Pagination.jsx';

function Anime() {
  const [anime, setAnime] = useState([])
  const [pageNo,setPageNo]= useState(1)

  function handlePrev(){
    if(pageNo===1){
      setPageNo(1)
    }
    else{
      setPageNo(pageNo-1)
    }
  }

  function handleNext(){
        setPageNo(pageNo+1)
  }

  useEffect(() => {
    async function fetchData() {
      const api_URL= import.meta.env.VITE_API_URL
      
      try {
        const res = await axios.get(`${api_URL}${pageNo}`);
        setAnime(res.data.data)
        console.log(res.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [pageNo]);

  return (
    <div>
      <Banner/>
      <div>
        <div className='w-full text-3xl text-center p-5 m-4'>
          Trending Anime
        </div>
        <div className='flex flex-row flex-wrap justify-around gap-10'>
          {anime.map((animeObj) => (
            <AnimeCard key={animeObj.mal_id} image_url={animeObj.images.jpg.image_url} title={animeObj.title_english}/>
          ))}
        </div>
        <Pagination pageNo={pageNo} handlePrev={handlePrev} handleNext={handleNext}/>
      </div>
    </div>
  )
}

export default Anime
