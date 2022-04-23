import React from 'react'

function NameListFive() {
    const names = ["Scott", "Adam", "Tuan"]
    const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>)
  return (
    <>
        <h1>NameList</h1>
        {nameList}
    </>
  )
  
}

export default NameListFive