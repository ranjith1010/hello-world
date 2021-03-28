import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props){
        super(props)

        this.state = {
            message : 'Finally, You are Here!!'
        }

        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message : 'Byee'
    //     })
    //     console.log(this)
        
    // }

    clickHandler = () => {
        this.setState({
            message : "Good Bye"
        })
    }

    render() {
        return (
            <div>
                <div> { this.state.message }</div><br/>
                {/* <button onClick={ this.clickHandler.bind(this) }>Click Me!</button> */}
                {/* <button onClick={ () => this.clickHandler() }>Click Me!</button> */}
                {/* <button onClick={ this.clickHandler }>Click Me!</button> */}
                <button onClick={ this.clickHandler }>Click Me!</button>
            </div>
        )
    }
}

export default EventBind
