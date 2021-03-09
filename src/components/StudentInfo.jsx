import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow, MDBContainer } from 'mdbreact';

const StudentInfo = ({ student }) => {
  return (
    <div>
      {student.map(x => {
        return (
          <MDBCard style={{ width: "22rem" }}>
            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
            <MDBCardBody>
              <MDBCardTitle>{x.name}</MDBCardTitle>
              <MDBCardText>
                Email: {x.email} <br/>
                Tutorial Group: {x.tutgrp}
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        )
      })}
    </div>
  )
}

export default StudentInfo;