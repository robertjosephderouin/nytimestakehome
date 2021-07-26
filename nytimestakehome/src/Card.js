import React from 'react'

const Card = ({ key, abstract, byline, image }) => {
    return(
      <div className='card' key={key}>
        <div className='image-container'>
          <img className='image'src={image} alt={abstract} />
        </div>
        <h2>{abstract}</h2>
        <p>{byline}</p>
      </div>
    )
}

export default Card
