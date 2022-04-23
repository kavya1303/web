import React from 'react'

function NameListThree() {
    const users = [
        {
            id: 1,
            name: "Scott Desatnick",
            age: 45,
            skill: 'React'
        },
        {
            id: 2,
            name: "Adam Colson",
            age: 43,
            skill: 'Angular'
        },
        {
            id: 3,
            name: "Tuan Bui",
            age: 42,
            skill: 'NodeJS'
        },
        {
            id: 4,
            name: "Uma",
            age: 40,
            skill: 'JavaScript'
        },
    ]
    const userList = users.map(user => {
        return <div key={user.id}>
                <h2>Id: {user.id}</h2>
                <h2>Name: {user.name}</h2>
                <h2>Age: {user.age}</h2>
                <h2>Skill: {user.skill}</h2>
                <br />
             </div>
    })
  return userList
}

export default NameListThree