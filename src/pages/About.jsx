//import { MDBView } from 'mdbreact'
import React, { Component } from 'react'
import { MDBMask, MDBView, MDBContainer } from "mdbreact";
//import SelectPage from '../components/SelectPage'
//import Search from '../components/Search'
//import Table from '../components/Table'
import Question from '../components/Question'

const divStyle = {
    display: 'flex', 
    alignItems: 'center'
  };
  
class About extends Component {
    /*state = {
        classes : ["All","TS1", "TS2", "TS3"],
    }
    
    ClassesLoop = () => {
        return this.state.classes.map(data => {
            return (<option value={data}> {data} </option>);
        })
    }
    */

    render() {
        

        /*//using Arrow loop to return multi options
        return (
            <MDBView>
                <img class = "background"></img> // removed
                <MDBMask pattern={2}> 

                <div  style={divStyle}> // removed
                    <SelectPage>  </SelectPage> // removed
                    <Search></Search> // removed
                </div> // removed
                <Table className = 'Questions'></Table> // removed
                <Question className = 'Questions'></Question> // added in
                </MDBMask>
            </MDBView>
            
        )
        */
    
       return (
        <MDBView>
            <img class = "background"></img>
            <MDBMask pattern={2}> 

            
            <Question className = 'Questions'></Question>
            </MDBMask>
        </MDBView>
       )
    }

}
export default About