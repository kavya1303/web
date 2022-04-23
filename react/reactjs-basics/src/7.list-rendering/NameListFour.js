import React from 'react'
import User from './User'

function NameListFour() {
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

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Skill</th>
                </tr>
            </thead>
            <tbody>
                {/* {
                    users.map(user => {
                    return <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.skill}</td>
                          </tr>
                    })
                } */}
                {
                    users.map(user => <User key={user.id} user={user} />)
                }
            </tbody>
        </table>
    )
}

export default NameListFour