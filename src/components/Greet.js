import React from 'react'

const Greet = props => {
    const {name,tech,children} = props
    return(
        <div>
            <h3>
                {name} loves {tech}!!
            </h3>
            {children}
        </div>
    )
}


export default Greet