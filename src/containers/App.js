import React,{Component} from 'react'
import Cardlist from '../components/Cardlist'
import SearchBox from '../components/SearchBox'
import {robots} from './robots'
import './app.css'
import Scroll from '../components/Scroll'
 

class App extends Component{
    constructor(){ 
        super()   
        this.state={ 
    robots:robots,
    searchfield:''
}
    } 

    onsearchchange=(event)=>{
        this.setState({searchfield: event.target.value })
       // console.log(event.target.value)
       
       // console.log(filterrobots)
    }

render(){
    const{robots,searchfield}=this.state

     const filterrobots=robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
   return(

        <div className='tc'> 

            
        <h1 className='f1'> Robo Friends</h1>
<SearchBox searchchange={this.onsearchchange} />
        <Scroll>

            <Cardlist robots={filterrobots} />

        </Scroll>  
        
        </div>


    ) 
}
    

}

export default App

