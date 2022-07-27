import React from 'react'
import "./CitiesList.css"
import { City } from '../city/City'
import Cities from "../../az.json"



export const CitiesList = ({search, setSearch}) => {

  return (
    <div className='citiesList'>
         {Cities.filter((val) => {
          if (search == "") {
            return val;
          }else if (val.city.toLowerCase().slice(0,search.length) === search.toLowerCase()){
            return val
          }
         }).map(c => (
            <City city={c}/>
        ))} 
    </div>
  )
}
