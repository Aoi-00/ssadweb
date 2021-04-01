import React from "react";
import { MDBInput, MDBBtn } from 'mdbreact';

const MarkScoreComment = ({ record, inputChange, markComplete, goBack, scoreError, commentError }) => {
  return (
    <div>
      {record.map(x => {
        return (
          <form key={x.id}>
            <div className="grey-text">
              <MDBInput label="Score" placeholder="Enter Score" id="score" onChange={inputChange} className="w-100" icon="star" group type="email" validate error="wrong"
                success="right" />
                <div style = {{fontSize: 20, color:"rgb(255, 61, 61)"}}> {console.log(scoreError)}</div>
              <MDBInput label="Comment" placeholder="Enter Comments" id="comment" onChange={inputChange} className="w-100" icon="comment" group type="email" validate error="wrong"
                success="right" />
                <div style = {{fontSize: 20, color:"rgb(255, 61, 61)"}}> {commentError}</div>
            </div>
            <div className="text-center">
              <MDBBtn color="blue" onClick={markComplete}>Submit</MDBBtn>
              <MDBBtn color="green" onClick = {goBack} > Back
                       </MDBBtn>
            </div>
            
          </form>
        )
      })
      }
    </div>
  );
};

export default MarkScoreComment;