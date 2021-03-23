
import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import TutorialTable from '../components/assignmentpage/TutorialTable'
import AddTutorial from '../components/assignmentpage/AddTutorial'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { showTutorials, deleteTutorial, addTutorial, showUserTutorial } from '../Redux/Actions/TutorialAction'
import Navbar from '../components/share/Navbar';
import Footer from '../components/share/Footer';

class Assignment extends Component {
    state = {
        tutgrp: localStorage.getItem("tutgrp")
    }
    componentDidMount() {
        //this.props.showAllTutorials();
        this.GetTutorials()
    }
    GetTutorials = () => {
        const form = {
            tutgrp: this.state.tutgrp
        }
        this.props.showUserTutorial(form);
    }
    Navigate = (tutid) => {
        this.props.history.push('/question/' + tutid)
    }
    DelTutorial = (tutid) => {
        const form = {
            tutid: tutid
        }
        this.props.deleteTutorial(form)
    }
    NotLoggedIn = () => {
        this.props.history.push('/logout')
    }
    AddTutorial = (form) => {
        //Submit data to my api
        this.props.addTutorial(form);
    }

    OnBack = () => {
        this.props.history.push('/home')
    }

    render() {
        return (
            <React.Fragment>
                <Navbar validateLogin={this.NotLoggedIn} />
                <MDBContainer>
                <br/>
                    <MDBRow>
                        <MDBCol>
                            <h2>Assignment List</h2>
                            <hr/>
                            <TutorialTable deleteTut={this.DelTutorial}  navigate={this.Navigate} tutorial={this.props.tutorialtable} />
                            <br />
                            <h3>Assignment Creation</h3>
                            <hr/>
                            <AddTutorial addTut={this.AddTutorial} onBack = {this.OnBack} />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <Footer />
            </React.Fragment>
        )
    }
}

Assignment.propTypes = {
    showTutorials: PropTypes.func.isRequired,
    deleteTutorial: PropTypes.func.isRequired,
    addTutorial: PropTypes.func.isRequired,
    showUserTutorial: PropTypes.func.isRequired
}

//This is from the Reducers
//state.Rootreducer.TutorialReducers
const mapStateToProps = state => ({
    tutorialtable: state.tutorial.tutorialgrp,
});

// connection this component to database.
export default connect(mapStateToProps, { showUserTutorial, showTutorials, deleteTutorial, addTutorial })(Assignment)