import React from 'react'

function ChildComponent(props) {
    const greet = props.greetHandler
    return (
        <div>
            <button onClick={ () => greet('Babyy') }>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
