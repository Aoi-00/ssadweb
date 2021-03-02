import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class RefreshPage extends Component {
    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol lg="2" sm="4">Column</MDBCol>
                    <MDBCol lg="2" sm="4">Column</MDBCol>
                    <MDBCol lg="2" sm="4">Column</MDBCol>
                    <MDBCol lg="2" sm="4">Column</MDBCol>
                    <MDBCol lg="2" sm="4">Column</MDBCol>
                    <MDBCol lg="2" sm="4">Column</MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}
export default RefreshPage