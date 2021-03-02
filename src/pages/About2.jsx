//import { MDBView } from 'mdbreact'
import React, { Component } from 'react'
import { MDBMask, MDBView, MDBContainer } from "mdbreact";
import SelectPage from '../components/SelectPage'
import Search from '../components/Search'
import Table from '../components/Table'


const divStyle = {
    display: 'flex', 
    alignItems: 'center'
  };
  
class About2 extends Component {
    state = {
        classes : ["All","TS1", "TS2", "TS3"],
    }
    
    ClassesLoop = () => {
        return this.state.classes.map(data => {
            return (<option value={data}> {data} </option>);
        })
    }
    

    render() {
        

        //using Arrow loop to return multi options
        return (
            <div></div>
            
        )
        
        }
       

}
export default About2