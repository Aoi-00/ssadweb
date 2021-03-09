import React from 'react';

import { MDBRow, MDBCol, MDBContainer } from "mdbreact";

const MarkPicture = ({ record }) => {
  return (
    <div>
      {record.map(x => {
        return (
          <MDBRow>
            <MDBCol md="12" className="mb-3">
              <img src={x.image} className="img-fluid z-depth-1" alt="" />
            </MDBCol>
          </MDBRow>
        )
      })
      }
    </div>

  )
}

export default MarkPicture;