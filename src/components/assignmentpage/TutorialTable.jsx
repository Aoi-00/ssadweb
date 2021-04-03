import React, { Component } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn, MDBLink } from 'mdbreact';

class TutorialTable extends Component {

  /**
   * state
   * set default loading = false
   */
  state = {
    loading: false
  }
  /**
   * onDelete
   * @param {*} tutid upon click, remove the tutid
   */
  onDelete = (tutid) => {
    this.setState({ loading: !this.state.loading })
    this.props.deleteTut(tutid);
  }

  /**
   * View Tutorial
   * @param {*} tutid upon click bring you to question page
   */
  ViewTutorial = (tutid) => {
    this.props.navigate(tutid)
  }

  /**
   * componentDidUpdate 
   * @param {*} prevProps if there is changes in tutorial, set loading = false 
   */
  componentDidUpdate(prevProps) {
    if (prevProps.tutorial !== this.props.tutorial) {
      this.setState({ loading: false })
    }
  }
  /**
   * creation of new assignment
   * @returns assignment name and tutorial grouping
   */
  render() {
    return (
      <MDBTable striped>
        <MDBTableHead>
          <tr>
            <th>Assignment Name</th>
            <th>Tutorial Group</th>
            <th>Created by</th>
            <th>Remove</th>
            <th>View</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {this.props.tutorial && this.props.tutorial.map(x => {
            return (
              <tr key={x.tutid}>
                <td>{x.tutname}</td>
                <td>{x.tutgrp}</td>
                <td>{x.createdby}</td>
                {(!this.state.loading) ? <td><MDBBtn size="sm" color="red" onClick={() => this.onDelete(x.tutid)}>Remove</MDBBtn></td> : <td><MDBBtn size="sm" color="red" disabled>Removing</MDBBtn></td>}
                <td><MDBBtn size="sm" color="blue" onClick={() => this.ViewTutorial(x.tutid)} > View </MDBBtn>
                </td>
              </tr>
            )
          })}
        </MDBTableBody>
      </MDBTable>
    )
  }
}

export default TutorialTable;