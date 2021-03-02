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
            <MDBView>
                <img class = "background"></img> 
                <MDBMask pattern={2}> 

                <div  style={divStyle}> 
                    <SelectPage>  </SelectPage> 
                    <Search></Search> 
                </div> 
                <Table className = 'Questions'></Table> 
                
                </MDBMask>
            </MDBView>
            
        )
        
        }
       

}
export default About2