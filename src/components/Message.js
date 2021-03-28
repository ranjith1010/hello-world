import React from "react"
import {Component} from 'react'

class Message extends Component{

    constructor(){
        super()
        this.state = {
            message : 'Welcome Visitor'
        }
    }

    changeMessage(){
        if(this.state.message==='Welcome Visitor')
        {
            this.setState({
            message : 'Thanks for Subscribing'
                })
        }
        else{
            this.setState({
                message : 'Get Out'
                })
        }
    }

    render(){
        return(
            <div>
                <h3>{this.state.message}</h3>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message