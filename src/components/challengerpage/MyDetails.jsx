import React, { Component } from 'react'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCol, MDBRow, MDBContainer, MDBCardText } from 'mdbreact';

class MyDetails extends Component {

    render() {
        const { student } = this.props
        return (
            <div>
                {student && student.map(x => {
                    return (
                        <MDBCard key={x.id} style={{ width: "22rem" }}>
                            <MDBCardImage className="img-fluid" src={x.picture} waves />
                            <MDBCardBody>
                                <MDBCardTitle>{x.name}</MDBCardTitle>
                                <MDBCardText>
                                    Email: {x.email} <br />
                Tutorial Group: {x.tutgrp}
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    )
                })}
            </div>
        )
    }
}
export default MyDetails