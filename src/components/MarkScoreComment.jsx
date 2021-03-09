import React from "react";
import { MDBInput, MDBBtn } from 'mdbreact';

const MarkScoreComment = ({ record }) => {
  return (
    <div>
      {record.map(x => {
        return (
          <form>
            <div className="grey-text">
              <MDBInput label="Score" value={x.score} className="w-100" icon="star" group type="email" validate error="wrong"
                success="right" />
              <MDBInput label="Comment" value={x.comment} className="w-100" icon="comment" group type="email" validate error="wrong"
                success="right" />
            </div>
            <div className="text-center">
              <MDBBtn color="blue">Submit</MDBBtn>
            </div>
          </form>
        )
      })

      }
    </div>
  );
};

export default MarkScoreComment;