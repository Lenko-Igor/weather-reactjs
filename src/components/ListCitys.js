import React from 'react'
import './ListCitys.css'
import City from './City.js'
import PropTypes from 'prop-types'


function ListCitys({citys}){
  return(
    <ul className='citys'>
      {citys.map((e, i)=> {
        return <City place={e} key={e.cityID} index={i}/>
      })}
    </ul>
  )
}

ListCitys.propTypes = {
  citys: PropTypes.arrayOf(PropTypes.object).isRequired,
}


export default ListCitys