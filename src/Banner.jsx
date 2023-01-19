import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from "./axios"
import requests from "./Requests"

function Banner() {
  const [movie, setMovie] = useState([])

  useEffect(() =>{
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length -1)
        ]
      );
      return request;
    }
    fetchData()
  },[])

  function truncate(string, n){
    return string?.length > n ? string.substr(0, n -1)+ '...': string;

  }
  return ( <header className='banner' style={{
    backgroundSize: "cover",
    backgroundImage:`url("https://cdn.discordapp.com/attachments/1058878537899180184/1065530051585638470/e1hLQ2m.png")`,
    backgroundPosition: "center center",
    
    }}>
      <div className="banner_contents">
        <h1 className="banner_title">Movie name</h1>
        <div className="banner_buttons">
          <button className='banner_button'>Play</button>
          <button className='banner_button'>My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(`this is a test description this is a  test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test description`, 150)}</h1>
      </div>

      <div className="banner--fadeBottom"/>
      
    </header>
  )
}

export default Banner