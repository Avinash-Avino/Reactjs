import React, { Component } from 'react'

class Classclick extends Component {
    constructor() {
        super()
    
        this.state = {
             message:'Hello',
             message1:'buddy',
             message2:''
        }
    }
    changemessage=()=>{
        this.setState({
            message:'HELLO Avinash'
            ,message1:'buddy Avinash'
        })

    }
    tocheck=()=>{
        if(this.state.message==='HELLO Avinash'){
            this.setState({
                message2:'success'
            })
            
        }
        else{
            this.setState({
                message2:'Fu!k'
            })
        }
    }

    
    render() {
        return (
            <div>
                <h1>{this.state.message}{this.state.message1}<br/>{this.state.message2}</h1>
                <button onClick={()=>this.changemessage()}>checkMe</button>
                <button onClick={()=>this.tocheck()}>log</button>
            </div>
        )
    }
}

export default Classclick
