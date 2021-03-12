import React, { Component } from 'react'
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getStudents } from '../Redux/Actions/GameActions'

class StudentSelect extends Component {
    state = {
        tutgrp: localStorage.getItem("seltutgrp"),
        tutid: this.props.match.params.tutid
    }
    componentDidMount() {
        this.getStudents()
    }
    getStudents() {
        const form = {
            tutid: this.state.tutid
        }
        this.props.getStudents(form)
    }
    ViewDetails = (submissionid, studid) => {
        this.props.history.push('/marking/' + submissionid + "/" + studid)
    }
    render() {
        let studentlist = this.props.students.map(x => {
            return (
                <tr key={x.id}>
                    <td>{x.name}</td>
                    <td>{x.date}</td>
                    <td>{x.tutgrp}</td>
                    <td><MDBBtn size="sm" color="green" onClick={() => this.ViewDetails(x.id, x.studid)}> Select </MDBBtn></td>
                </tr>
            );
        })
        return (
            <div>
                <MDBContainer>
                    <br />
                    <MDBRow>
                        <MDBCol size="12">
                            <h2>Select Student to Mark from Group: {this.state.tutgrp}</h2>
                            <hr />
                            <MDBTable striped>
                                <MDBTableHead>
                                    <tr>
                                        <th>Student Name</th>
                                        <th>Date Submitted</th>
                                        <th>Tutorial Group</th>
                                        <th>Select</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    {studentlist}
                                </MDBTableBody>
                            </MDBTable>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

            </div>
        )
    }
}
StudentSelect.propTypes = {
    getStudents: PropTypes.func.isRequired,
}

//This is from the Reducers
//state.Rootreducer.TutorialReducers
const mapStateToProps = state => ({
    students: state.game.studentlist,
});
export default connect(mapStateToProps, { getStudents })(StudentSelect)