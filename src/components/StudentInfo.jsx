import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow, MDBContainer } from 'mdbreact';

const StudentInfo = () => {
  return (
    <MDBContainer>
    <MDBRow>
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>Name</MDBCardTitle>
          <MDBCardTitle>Email</MDBCardTitle>
          <MDBCardTitle>TutorialGroup</MDBCardTitle>
         
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol  md = "6">
    <img src="https://mdbootstrap.com/img/Others/documentation/1.jpg" className="img-fluid" alt="" />
    </MDBCol>
    </MDBRow>
    </MDBContainer>
  )
}

export default StudentInfo;