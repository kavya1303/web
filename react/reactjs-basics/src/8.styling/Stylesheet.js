import React from 'react'
import './Styling.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary': 'secondary'
  return (
    <div>
        <h1 className={`${className} enlarge-text`}>Stylesheet has been applied</h1>
    </div>
  )
}

export default Stylesheet