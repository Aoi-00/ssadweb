import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class SolutionModal extends Component {
state = {
  modal: false
}

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

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