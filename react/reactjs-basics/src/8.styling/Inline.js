import React from 'react'

function Inline() {
    const heading = {
        fontSize: '72px',
        color: 'blue'
    }
  return (
    <div>
        <h1 style={heading}>A blue header with large size font</h1>

        <h2 style={{fontSize: '45px', color: 'red'}}>A red header with medium size font</h2>
    </div>
  )
}

export default Inline