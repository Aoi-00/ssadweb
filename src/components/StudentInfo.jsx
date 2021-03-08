import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow, MDBContainer } from 'mdbreact';

const StudentInfo = () => {
  return (
  
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
   
  )
}

export default StudentInfo;