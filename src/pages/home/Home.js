import React, { useContext, useState } from 'react'
import "./home.css"
import {  BiSearchAlt2} from 'react-icons/bi';
import { LightDarkContext } from '../../context/LightDarkContext'
import { CitiesList } from '../../components/citiesList/CitiesList';



export const Home = () => {

    const { theme, setTheme } = useContext(LightDarkContext)
    const [search, setSearch] = useState("")
   

  return (
    <div className='home-cont'>
        <div className='searchSec'>
        <input 
        className={`search ${theme ? "a": "b"}`} 
        placeholder='Search...' type="text" 
        onChange={e => {setSearch(e.target.value)}}
        ></input>
       < BiSearchAlt2 size="1.8rem" className={`icon ${theme ? "x": "y"}`} />
        </div>
        <CitiesList search={search} setSearch={setSearch}/>
    </div>
  )
}
