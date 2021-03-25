
import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import TutorialTable from '../components/assignmentpage/TutorialTable'
import AddTutorial from '../components/assignmentpage/AddTutorial'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { showTutorials, deleteTutorial, addTutorial, showProfTutorial } from '../Redux/Actions/TutorialAction'
import Navbar from '../components/share/Navbar';
import Footer from '../components/share/Footer';

class Assignment extends Component {
    state = {
        tutgrp: localStorage.getItem("tutgrp"),
        name: localStorage.getItem("name")
    }
    componentDidMount() {
        //this.props.showAllTutorials();
        this.GetTutorials()
    }
    GetTutorials = () => {
        const form = {
            tutgrp: this.state.tutgrp,
            name: this.state.name
        }
        this.props.showProfTutorial(form);
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
        console.log(this.props.tutorialtable)
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
    showProfTutorial: PropTypes.func.isRequired
}

//This is from the Reducers
//state.Rootreducer.TutorialReducers
const mapStateToProps = state => ({
    tutorialtable: state.tutorial.tutorialgrp,
});

// connection this component to database.
export default connect(mapStateToProps, { showProfTutorial, showTutorials, deleteTutorial, addTutorial })(Assignment)