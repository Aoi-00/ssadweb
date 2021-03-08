import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";

const MarkDropDown = () => {
return (
<MDBContainer>
  <MDBListGroup style={{ width: "22rem" }}>
    <MDBListGroupItem active href="#">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">List group item heading</h5>
        <small>3 days ago</small>
      </div>
      <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
        blandit.</p>
      <small>Donec id elit non mi porta.</small>
    </MDBListGroupItem>
    <MDBListGroupItem hover href="#">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">List group item heading</h5>
        <small className="text-muted">3 days ago</small>
      </div>
      <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
        blandit.</p>
      <small className="text-muted">Donec id elit non mi porta.</small>
    </MDBListGroupItem>
    <MDBListGroupItem hover href="#">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">List group item heading</h5>
        <small className="text-muted">3 days ago</small>
      </div>
      <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
        blandit.</p>
      <small className="text-muted">Donec id elit non mi porta.</small>
    </MDBListGroupItem>
  </MDBListGroup>
</MDBContainer>
);
};

export default MarkDropDown;