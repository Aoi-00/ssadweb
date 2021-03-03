import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import TutorialTable from '../components/TutorialTable'
import AddTutorial from '../components/AddTutorial'

class Tutorial extends Component {
    render() {
        return (
        <MDBContainer>
            <MDBRow>
                <MDBCol>
                <h2>Tutorial Grouping</h2>
                    <TutorialTable />
                    <td><MDBBtn color="green" >Add</MDBBtn></td>
                    <br/>
                <h3>Add New Tutorial Grouping</h3>
                    <AddTutorial />
                    
                </MDBCol>
            </MDBRow>
        </MDBContainer>
               
            
        )
    }
}
export default Tutorial