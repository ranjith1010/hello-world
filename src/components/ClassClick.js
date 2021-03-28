import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler(){
        console.log("Class Clicked");
    }

    render() {
        return (
            <div>
                <button onClick= { this.clickHandler }>Click Me Babby!!</button>
            </div>
        )
    }
}

export default ClassClick
