import React, { useEffect, useState, useContext } from 'react'
import "./singleCityPage.css"
import axios from "axios"
import { WiDaySunny, WiCloudy, WiDayRain, WiDayCloudy, } from 'weather-icons-react';
import { useParams } from 'react-router-dom';
import { LightDarkContext } from '../../context/LightDarkContext'





export const SingleCityPage = () => {

  const { theme, setTheme } = useContext(LightDarkContext)


  const [cityData, setCityData] = useState()
  

  let { id } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      try {

        let a = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${id}&appid=7ce9ad2ef0f3eea26b567eed9f83e341`)
        setCityData(a.data)
        console.log(a)
        console.log(cityData)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [])






  return (
    <div className='SingleCityPage'>
      <div className='top'>
        
        <div className='degree'>
          {cityData && cityData.list[0].weather[0].description === 'broken clouds' && <WiCloudy className="weather-icon" style={{color:"#988B90"}}/>}
          {cityData && cityData.list[0].weather[0].description === 'overcast clouds' && <WiCloudy className="weather-icon" style={{color:"#988B90"}}/>}
          {cityData && cityData.list[0].weather[0].description === 'light rain' && <WiDayRain className="weather-icon" style={{color:"#60A1BD"}}/>}
          {cityData && cityData.list[0].weather[0].description === 'scattered clouds' && <WiDayCloudy className="weather-icon" style={{color:"#393ED2"}}/>}
          {cityData && cityData.list[0].weather[0].description === 'clear sky' && <WiDaySunny className="weather-icon" style={{color:"yellow"}}/>}
          {cityData && cityData.list[0].weather[0].description === 'moderate rain' && <WiDayRain className="weather-icon" tyle={{color:"#60A1BD"}}/>}
          {cityData && cityData.list[0].weather[0].description === 'few clouds' && <WiDayCloudy className="weather-icon" style={{color:"#393ED2"}}/>}
          {cityData && <p className={`deg ${theme ? "a" : "b"}`}>{parseInt((cityData.list[0].main.temp)-273.15)}°C</p>} 
        </div>
        <div className='city-name'>
        {cityData && <h2>{cityData.city.name}</h2>} 
        {cityData && <p className={`deg ${theme ? "a" : "b"}`} > {cityData.list[0].dt_txt} </p>} 
        {cityData && <p className={`deg ${theme ? "a" : "b"}`}>{cityData.list[0].weather[0].description}</p>} 
        </div>
      </div>
      <div className='middle'>
        <div className='chart'>
       
        </div>
      </div>
      <div className='bottom'>
        <div className='day'>
        {cityData && <p className={`deg ${theme ? "a" : "b"}`}>{cityData.list[8].dt_txt.substr(0, 10)}</p>} 
          {cityData && cityData.list[8].weather[0].description === 'broken clouds' && <WiCloudy className="weather-icon" style={{color:"#988B90"}}/>}
          {cityData && cityData.list[8].weather[0].description === 'overcast clouds' && <WiCloudy className="weather-icon" style={{color:"#988B90"}}/>}
          {cityData && cityData.list[8].weather[0].description === 'light rain' && <WiDayRain className="weather-icon" style={{color:"#60A1BD"}}/>}
          {cityData && cityData.list[8].weather[0].description === 'scattered clouds' && <WiDayCloudy className="weather-icon" style={{color:"#393ED2"}}/>}
          {cityData && cityData.list[8].weather[0].description === 'clear sky' && <WiDaySunny className="weather-icon" style={{color:"yellow"}}/>}
          {cityData && cityData.list[8].weather[0].description === 'moderate rain' && <WiDayRain className="weather-icon" tyle={{color:"#60A1BD"}}/>}
          {cityData && cityData.list[8].weather[0].description === 'few clouds' && <WiDayCloudy className="weather-icon" style={{color:"#393ED2"}}/>}
          {cityData && <p className={`deg ${theme ? "a" : "b"}`}>{parseInt((cityData.list[8].main.temp)-273.15)}°C</p>} 
        </div>
        <div className='day'>
        {cityData && <p className={`deg ${theme ? "a" : "b"}`}>{cityData.list[15].dt_txt.substr(0, 10)}</p>} 
          {cityData && cityData.list[15].weather[0].description === 'broken clouds' && <WiCloudy className="weather-icon" style={{color:"#988B90"}}/>}
          {cityData && cityData.list[15].weather[0].description === 'overcast clouds' && <WiCloudy className="weather-icon" style={{color:"#988B90"}}/>}
          {cityData && cityData.list[15].weather[0].description === 'light rain' && <WiDayRain className="weather-icon" style={{color:"#60A1BD"}}/>}
          {cityData && cityData.list[15].weather[0].description === 'scattered clouds' && <WiDayCloudy className="weather-icon" style={{color:"#393ED2"}}/>}
          {cityData && cityData.list[15].weather[0].description === 'clear sky' && <WiDaySunny className="weather-icon" style={{color:"yellow"}}/>}
          {cityData && cityData.list[15].weather[0].description === 'moderate rain' && <WiDayRain className="weather-icon" tyle={{color:"#60A1BD"}}/>}
          {cityData && cityData.list[15].weather[0].description === 'few clouds' && <WiDayCloudy className="weather-icon" style={{color:"#393ED2"}}/>}
          {cityData && <p className={`deg ${theme ? "a" : "b"}`}>{parseInt((cityData.list[15].main.temp)-273.15)}°C</p>} 
        </div>
        <div className='day'>
        {cityData && <p className={`deg ${theme ? "a" : "b"}`}>{cityData.list[23].dt_txt.substr(0, 10)}</p>} 
          {cityData && cityData.list[23].weather[0].description === 'broken clouds' && <WiCloudy className="weather-icon" style={{color:"#988B90"}}/>}
          {cityData && cityData.list[23].weather[0].description === 'overcast clouds' && <WiCloudy className="weather-icon" style={{color:"#988B90"}}/>}
          {cityData && cityData.list[23].weather[0].description === 'light rain' && <WiDayRain className="weather-icon" style={{color:"#60A1BD"}}/>}
          {cityData && cityData.list[23].weather[0].description === 'scattered clouds' && <WiDayCloudy className="weather-icon" style={{color:"#393ED2"}}/>}
          {cityData && cityData.list[23].weather[0].description === 'clear sky' && <WiDaySunny className="weather-icon" style={{color:"yellow"}}/>}
          {cityData && cityData.list[23].weather[0].description === 'moderate rain' && <WiDayRain className="weather-icon" tyle={{color:"#60A1BD"}}/>}
          {cityData && cityData.list[23].weather[0].description === 'few clouds' && <WiDayCloudy className="weather-icon" style={{color:"#393ED2"}}/>}
          {cityData && <p className={`deg ${theme ? "a" : "b"}`}>{parseInt((cityData.list[23].main.temp)-273.15)}°C</p>} 
        </div>
        <div className='day'>
        {cityData && <p className={`deg ${theme ? "a" : "b"}`}>{cityData.list[31].dt_txt.substr(0, 10)}</p>} 
          {cityData && cityData.list[31].weather[0].description === 'broken clouds' && <WiCloudy className="weather-icon" style={{color:"#988B90"}}/>}
          {cityData && cityData.list[31].weather[0].description === 'overcast clouds' && <WiCloudy className="weather-icon" style={{color:"#988B90"}}/>}
          {cityData && cityData.list[31].weather[0].description === 'light rain' && <WiDayRain className="weather-icon" style={{color:"#60A1BD"}}/>}
          {cityData && cityData.list[31].weather[0].description === 'scattered clouds' && <WiDayCloudy className="weather-icon" style={{color:"#393ED2"}}/>}
          {cityData && cityData.list[31].weather[0].description === 'clear sky' && <WiDaySunny className="weather-icon" style={{color:"yellow"}}/>}
          {cityData && cityData.list[31].weather[0].description === 'moderate rain' && <WiDayRain className="weather-icon" tyle={{color:"#60A1BD"}}/>}
          {cityData && cityData.list[31].weather[0].description === 'few clouds' && <WiDayCloudy className="weather-icon" style={{color:"#393ED2"}}/>}
          {cityData && <p className={`deg ${theme ? "a" : "b"}`}>{parseInt((cityData.list[31].main.temp)-273.15)}°C</p>} 
        </div>
        <div className='day'>
        {cityData && <p className={`deg ${theme ? "a" : "b"}`}>{cityData.list[39].dt_txt.substr(0, 10)}</p>} 
          {cityData && cityData.list[39].weather[0].description === 'broken clouds' && <WiCloudy className="weather-icon" style={{color:"#988B90"}}/>}
          {cityData && cityData.list[39].weather[0].description === 'overcast clouds' && <WiCloudy className="weather-icon" style={{color:"#988B90"}}/>}
          {cityData && cityData.list[39].weather[0].description === 'light rain' && <WiDayRain className="weather-icon" style={{color:"#60A1BD"}}/>}
          {cityData && cityData.list[39].weather[0].description === 'scattered clouds' && <WiDayCloudy className="weather-icon" style={{color:"#393ED2"}}/>}
          {cityData && cityData.list[39].weather[0].description === 'clear sky' && <WiDaySunny className="weather-icon" style={{color:"yellow"}}/>}
          {cityData && cityData.list[39].weather[0].description === 'moderate rain' && <WiDayRain className="weather-icon" tyle={{color:"#60A1BD"}}/>}
          {cityData && cityData.list[39].weather[0].description === 'few clouds' && <WiDayCloudy className="weather-icon" style={{color:"#393ED2"}}/>}
          {cityData && <p className={`deg ${theme ? "a" : "b"}`}>{parseInt((cityData.list[39].main.temp)-273.15)}°C</p>} 
        </div>
      </div>
    </div>
  )
}
