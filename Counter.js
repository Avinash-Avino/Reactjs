import React, { Component } from 'react'
import './mystyle.css'

class Counter extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
         count:0  
     }
    
    }

    
 
    max=()=>{
        if(this.state.count<10){
         this.setState({
         count:this.state.count+1
        })}
        else if(this.state.count<19){
            this.setState({
                count:'your are pre-mature'
            })}
        else if(this.state.count>19){
            this.setState({
                count:'Congratulation'
            })
        }
        
    
    }
    min=()=>{
         if(this.state.count>0)
         {
        this.setState({
         count:this.state.count-1})}
    
 }
    re(){
        this.setState({
            count:0
        })
    }

 



    render() {
        return (
            <div>
                <h1 className='primary Msize Nsize'>Avinash {this.state.count}<br/>
              <button className='bsize' onClick = {this.max}>+</button><tab/>
              <button style={{width:"210px",height:"{this.state.count}"}} className='bsize' onClick={()=>this.re()}>RESET</button><tab/>
                <button style={{height:"{this.state.count}"}} className='bsize' onClick = {this.min}>-</button></h1><tab/>
                

            </div>
        )
    }
}

export default Counter
