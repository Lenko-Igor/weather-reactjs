import React, {useContext} from 'react'
import './City.css'
import PropTypes from 'prop-types'
import Context from '../context'

function City({place, index}){
  const {removeContent} = useContext(Context)
  const {activePlace} = useContext(Context)
  let classes = []
  
  if(activePlace === index){
    classes.push('color')
  }

  return(
    <li>
      <button className={classes.join(' ')} 
              onClick={() => {removeContent(index)}}>{place.name}
      </button>
    </li>
  )
}

City.propTypes = {
  place: PropTypes.object.isRequired,
  removeContent: PropTypes.func,
  index: PropTypes.number,
}

export default City