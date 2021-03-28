import React from 'react'

function Person({person}) {

    // const {person} = props
    return (
        <div>
            <h3>I am {person.name} and {person.age} old. I have experience in {person.skill}</h3>
        </div>
    )
}

export default Person
