import React from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

const  MarkDropDown= () => {
  return (
    <MDBDropdown>
      <MDBDropdownToggle caret color="primary">
        Questions
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem>1</MDBDropdownItem>
        <MDBDropdownItem>2</MDBDropdownItem>
        <MDBDropdownItem>3</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  
    
  );
}

export default MarkDropDown;
