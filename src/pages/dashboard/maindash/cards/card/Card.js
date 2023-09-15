import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
        <div className='content'>
            <div className='image' style={{ background: props.imgback }}>
                <img src={props.png} alt={props.title} />
            </div>
            <span>{props.title}</span>
            <span>{props.value}</span>
        </div>
        <div className='percentage'>
        <span>{props.percentage}</span>
        </div>
    </div>
  )
}

export default Card
