import React from "react";
import { MDBDropdown, MDBDropdownToggle, MDBBtn, MDBBtnGroup, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import PropTypes from 'prop-types'

const DropdownPage = ({color, text, action}) => {
  return (
    <MDBBtnGroup>
      <MDBBtn color={color}>
        {text}
      </MDBBtn>
      <MDBDropdown>
        <MDBDropdownToggle caret color={color} />
        <MDBDropdownMenu color={color}>
          <MDBDropdownItem>{action[0]}</MDBDropdownItem>
          <MDBDropdownItem>{action[1]}</MDBDropdownItem>
          <MDBDropdownItem>{action[2]}</MDBDropdownItem>
          <MDBDropdownItem>{action[3]}</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    </MDBBtnGroup>
  );
}

DropdownPage.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
}

export default DropdownPage;