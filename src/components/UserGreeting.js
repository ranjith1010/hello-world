import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props){
        super(props)

        this.state = {
            isLoggedIn : true
        }
    }

    render() {

        return this.state.isLoggedIn && <div>Welcome Ranjuu!!</div>

        // return this.state.isLoggedIn ? (<div>Welcome Ranju!!</div>) : (<div>Welcome Mr.X!!</div>)

        // let message

        // if(this.state.isLoggedIn) 
        //     message = <div>Welcome Ranju!! </div>
        // else
        //     message = <div>Welcome Mr.X!!</div>

        // return message


        // if(this.state.isLoggedIn){
        //     return <div>Welcome Ranju!!</div>
        // }

        // else{
        //     return <div>Welcome Mr.X!!</div>
        // }

    }
}

export default UserGreeting
