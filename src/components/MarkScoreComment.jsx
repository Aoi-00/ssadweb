import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

const  MarkScoreComment =() => {
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <div className="grey-text">
        <MDBInput label="Score" className="w-100" icon="star" group type="email" validate error="wrong"
            success="right" />
            <MDBInput label="Comment" icon="comment" group type="email" validate error="wrong"
            success="right" />
        </div>
        <div className="text-center">
          <MDBBtn>Submit</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default  MarkScoreComment;