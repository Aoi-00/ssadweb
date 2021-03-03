import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Table from '../components/Table';
import Textbox from '../components/Textbox';

class RefreshPage extends Component {
    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol lg="6" sm="12">
                        <Table />
                    </MDBCol>
                    <MDBCol lg="6" sm="12">
                        <Textbox />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}
export default RefreshPage