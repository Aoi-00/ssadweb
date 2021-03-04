
import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import TutorialTable from '../components/TutorialTable'
import AddTutorial from '../components/AddTutorial'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { showTutorials } from '../Redux/Actions/TutorialAction'

class Tutorial extends Component {
    componentDidMount() {
        this.props.showTutorials();
    }
    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol>
                        <h2>Tutorial Grouping</h2>
                        <TutorialTable tutorial={this.props.tutorialtable} />
                        <br />
                        <h3>Add New Tutorial Grouping</h3>
                        <AddTutorial />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

Tutorial.propTypes = {
    showTutorials: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    tutorialtable: state.tutorial.tutorialgrp,
});


export default connect(mapStateToProps, { showTutorials })(Tutorial)