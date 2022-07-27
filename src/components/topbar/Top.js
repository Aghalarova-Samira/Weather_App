import React, { useContext } from 'react'
import { LightDarkContext } from '../../context/LightDarkContext'
import Switch from "react-switch"
import "./top.css"

export const Top = () => {

    const { theme, setTheme } = useContext(LightDarkContext)

    const handleToggle = () => {
        setTheme(theme === true ? false : true)
    }

  return (
    <div className='top-cont'>
        <h2>WeatherApp</h2>
        <h3 className={`about ${theme ? "x": "y"}`}>About</h3>
        <span>
            <Switch 
            onChange={handleToggle} 
            checked={theme === true}
            uncheckedIcon={false}
            checkedIcon={false}
            onColor={"#149B9B"}
            />
        </span>
       {theme} 
    </div>
  )
}
