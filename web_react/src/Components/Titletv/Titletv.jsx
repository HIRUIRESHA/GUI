import React from 'react'
import './Titletv.css'

const Titletv = ({subTitle,title}) => {
    return (
        <div className = 'titletv'>
            <p>{subTitle}</p>
            <h2>{title}</h2>
        </div>
        
    )
}

export default Titletv