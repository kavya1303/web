import React from 'react'

function NamedListTwo() {
   const names =["Scott", "Adam", "Tuan", "Uma"]
   const NameList = names.map((name,index) => <h2 key={index}>{name}</h2>)
   return (
    // <React.Fragment>
    //     <h1>List of Names</h1>
    //     {NameList}
    // </React.Fragment>
    <>
        <h1>List of Names</h1>
        {NameList}
    </>
   )

   
}

export default NamedListTwo