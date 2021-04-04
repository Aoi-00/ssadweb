import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class SolutionModal extends Component {
  /**
   * state
   * set modal to false
   */
state = {
  modal: false
}

/**
 * toggle
 * set modal to the opposite state
 */
toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}
/**
 * SolutionModal
 * @returns 
 */
render() {
  return (
    <MDBContainer>
      <MDBBtn size="sm" color="blue" onClick={this.toggle}>View</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>Solution for Question {this.props.ind}</MDBModalHeader>
        <MDBModalBody>
          <p>Question: {this.props.question.question}</p><br/>
          <p>Solution: {this.props.question.solution}</p>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="red" size="sm" onClick={this.toggle}>Close</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default SolutionModal;