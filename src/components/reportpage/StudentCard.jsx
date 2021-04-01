import React, { Component } from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

class StudentCard extends Component {
    render() {
        return (
            <div>
                {this.props.profile && this.props.profile.map(x => {
                    return (
                        <MDBCard style={{ width: "22rem" }}>
                            <MDBCardImage className="img-fluid" src={x.picture} waves />
                            <MDBCardBody>
                                <MDBCardTitle>{x.name}</MDBCardTitle>
                                <MDBCardText>
                                    Email: {x.email} <br/>
                                    Tutorial Group: {x.tutgrp}
                                </MDBCardText>
                                <a className="btn blue white-text" href={"mailto:" + x.email}>Email Student</a>
                            </MDBCardBody>
                        </MDBCard>
                    )
                })
                }
            </div>
        )
    }
}
export default StudentCard