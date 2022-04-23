import React from 'react'

function User(props) {
    console.log(props)
  let {id, name, age, skill} = props.user
  return (
    <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{age}</td>
        <td>{skill}</td>
    </tr>
  )
}

export default User