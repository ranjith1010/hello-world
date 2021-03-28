import React from 'react'
import Person from './Person'

function NameList() {

    const names = ['Ranjith', 'Anu', 'Vani', 'Anu']

    const persons = [
        {
            id: 1,
            name: 'Anu',
            age:30,
            skill:'React'
        },
        {
            id: 2,
            name: 'Anu',
            age:30,
            skill:'React'
        },
        {
            id: 3,
            name: 'Anu',
            age:30,
            skill:'React'
        },
        {
            id: 5,
            name: 'Anu',
            age:30,
            skill:'React'
        }
    ]
    
    const personList = persons.map(person => (
        <Person key={person.id} person={person}/>
    ))

    const nameList = names.map((name,index) => <h3 key={index}>{name} - {index}</h3>)

    return (
        <div>
            { nameList }       
        </div>
    )
}

export default NameList
