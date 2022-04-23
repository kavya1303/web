import React from 'react'

const Greeting = (props) => {
  let {id, getTitle, name, isAdmin, address, skillSet, children} = props
  return (
    <div>
        <div>
            <h3>Id:  {id}</h3>
            <h3>Title:  {getTitle('Mr.')}</h3>
            <h3>Name:  {name}</h3>
            <h3>IsAdmin:  {isAdmin?"true": "false"}</h3>
            <h3>City:  {address.city}</h3>
            <h3>Country:  {address.country}</h3>
            <h3>Skill:  {skillSet[0]}</h3>
            <h3>{children }</h3>
        </div>
        <br />
      </div>
    )
  }
export default Greeting