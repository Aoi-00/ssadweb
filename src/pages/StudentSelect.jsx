import React, { Component } from 'react'
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBAnimation } from 'mdbreact';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getStudents } from '../Redux/Actions/GameActions'
import Navbar from '../components/share/Navbar';
import Footer from '../components/share/Footer';

class StudentSelect extends Component {
    /**
     * state
     * set tutgrp to local storage selTutgrp
     * tutid : tutid
     */
    state = {
        tutgrp: localStorage.getItem("seltutgrp"),
        tutid: this.props.match.params.tutid
    }
    componentDidMount() {
        this.getStudents()
    }
    /**
     * getStudents
     */
    getStudents() {
        const form = {
            tutid: this.state.tutid
        }
        this.props.getStudents(form)
    }
    /**
     * ViewDetails
     * @param {*} submissionid 
     * @param {*} studid 
     */
    ViewDetails = (submissionid, studid) => {
        this.props.history.push('/marking/' + submissionid + "/" + studid)
    }
    /**
     * GoBack
     * navigate to seltut
     */
    GoBack = () => { this.props.history.push('/seltut') }
    /**
     * NotLoggedIn
     */
    NotLoggedIn = () => {
        this.props.history.push('/logout')
    }
    /**
     * StudentSelect page
     * @returns StudentSelect page
     */
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
            <React.Fragment>
                <Navbar validateLogin={this.NotLoggedIn} />
                <MDBContainer>
                    <br />
                    <MDBAnimation type="slideInDown" >
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
                        <MDBBtn color="red" onClick={this.GoBack} > Back
                       </MDBBtn>
                    </MDBAnimation>
                </MDBContainer>
                <Footer />
            </React.Fragment>
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