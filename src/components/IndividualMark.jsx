import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBInput } from 'mdbreact';

const IndividualMark = () => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>Marking</MDBCardTitle>
          <MDBCardText>
          <MDBInput label="Score" icon="star" group type="email" validate error="wrong"
            success="right" />
            <MDBInput label="Comment" icon="comment" group type="email" validate error="wrong"
            success="right" />
          </MDBCardText>
          <MDBBtn href="#">Submit</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default IndividualMark