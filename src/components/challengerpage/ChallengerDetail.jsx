import React, { Component } from 'react'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow, MDBContainer } from 'mdbreact';


class ChallengerDetail extends Component {
    /**
     * Challenger details
     * @returns challenger details
     */
    render() {
        let details = this.props.student.map(x => {
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
        })
        return (
            <div>
                {details}
            </div>
        )
    }
}
export default ChallengerDetail