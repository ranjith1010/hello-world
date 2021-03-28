import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Ranjith'
        }

        console.log('LifecycleA Constructor')
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () =>{
        this.setState({
            name : 'Ranjuu'
        })
    }
    
    render() {
        const { name } = this.state
        console.log('LifecycleA render')
        return(
            <div>
                Lifecycle A  {name}<LifecycleB/>
                <button onClick={ this.changeState }>ChangeState</button>
            </div>
        )
    }

}

export default LifecycleA
