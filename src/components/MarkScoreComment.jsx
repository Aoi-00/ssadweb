import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

const  MarkScoreComment =() => {
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h5 text-center mb-4">Marking</p>
        <div className="grey-text">
        <MDBInput label="Score" icon="star" group type="email" validate error="wrong"
            success="right" />
            <MDBInput label="Comment" icon="comment" group type="email" validate error="wrong"
            success="right" />
        </div>
        <div className="text-center">
          <MDBBtn>Login</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default  MarkScoreComment;