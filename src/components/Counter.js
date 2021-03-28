import React, { Component } from 'react'

class Counter extends Component {

    constructor(props){
        super(props)

        this.state = {
            count : 0
        }
    }

    increment(){
        this.setState((prevState, props) => ({
            count : prevState.count + 1
        }), () => {console.log(this.state.count)})
   
    }

    incrementFive(){
        for(var i=0; i<5; i++){
            this.increment();
        }
    }

    decrement(){
        this.setState({
            count : this.state.count - 1
        }, () => {console.log(this.state.count)})
    }

    render() {
        return (
            <div>
                <div> Count = {this.state.count} </div><br/>
                <button onClick={() => this.incrementFive()}> Increment </button> &emsp;
                <button onClick={() => this.decrement()}> Decrement </button>
            </div>
        )
    }
}

export default Counter
