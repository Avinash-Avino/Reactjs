import React, { Component } from 'react'

class Counter extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
         count:0  
     }
    
    }

    
 
    max=()=>{
    
         this.setState({
         count:this.state.count-1
        })
    
    }
    min=()=>{
         //if(this.state.count>0)
        this.setState({
         count:this.state.count-1})
    
 }

 



    render() {
        return (
            <div>
                <h1>200{this.state.count}</h1>
               <button onClick = {this.max}>+</button><br/>
                <button onclick = {this.max}>-</button>

            </div>
        )
    }
}

export default Counter
