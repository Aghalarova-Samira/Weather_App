import React from 'react'
import "./city.css"
import { Link } from "react-router-dom"
import { SingleCityPage } from '../../pages/singleCityPage/SingleCityPage'

export const City = ({ city }) => {
  return (
    <Link to={`/singlepage/${city.city}`} className="link">
      <div className='city'>
        <p>{city.city}</p>
      </div>
    </Link>

  )
}
