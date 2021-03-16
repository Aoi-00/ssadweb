
import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import TutorialTable from '../components/TutorialTable'
import AddTutorial from '../components/AddTutorial'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { showTutorials, deleteTutorial, addTutorial } from '../Redux/Actions/TutorialAction'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class Tutorial extends Component {
    componentDidMount() {
        this.props.showTutorials();
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
    AddTutorial = (form) => {
        //Submit data to my api
        this.props.addTutorial(form);
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <MDBContainer>
                    <MDBRow>
                        <MDBCol>
                            <h2>Tutorial Grouping</h2>
                            <TutorialTable deleteTut={this.DelTutorial} navigate={this.Navigate} tutorial={this.props.tutorialtable} />
                            <br />
                            <h3>Add New Tutorial Grouping</h3>
                            <AddTutorial addTut={this.AddTutorial} />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <Footer />
            </React.Fragment>
        )
    }
}

Tutorial.propTypes = {
    showTutorials: PropTypes.func.isRequired,
    deleteTutorial: PropTypes.func.isRequired,
    addTutorial: PropTypes.func.isRequired
}

//This is from the Reducers
//state.Rootreducer.TutorialReducers
const mapStateToProps = state => ({
    tutorialtable: state.tutorial.tutorialgrp,
});

// connection this component to database.
export default connect(mapStateToProps, { showTutorials, deleteTutorial, addTutorial })(Tutorial)