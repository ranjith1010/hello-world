import React, { Component } from "react"; 

class Welcome extends Component{
    render(){
        const {name,children,tech} = this.props
        return (
        <h2> 
            Hello {tech} {name}!!! Love u lots!{children}
        </h2>
        )
    }
}

export default Welcome