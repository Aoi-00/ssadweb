import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow, MDBContainer } from 'mdbreact';

const StudentCard = ({ studname, profilepic, studemail, studtutgrp }) => {
  /**
   * StudentCard
   */
  return (
    <div>
       <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src={profilepic} waves />
        <MDBCardBody>
          <MDBCardTitle>{studname}</MDBCardTitle>
          <MDBCardText>
            Email: {studemail} <br />
                Tutorial Group: {studtutgrp}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </div>
  )
}

export default StudentCard;