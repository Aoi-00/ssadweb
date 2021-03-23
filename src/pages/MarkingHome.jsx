import React, { Component } from 'react'
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { showTutorials, showUserTutorial } from '../Redux/Actions/TutorialAction'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class MarkingHome extends Component {
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

    GoBack = () => {this.props.history.push('/home')}

    ViewTutorial = (tutid) => {
        var tutgrp = this.props.tutorialtable.filter(x => x.tutid == tutid).map(z => z.tutgrp)
        localStorage.setItem("seltutgrp", tutgrp)
        localStorage.setItem("selectedtutid", tutid)
        this.props.history.push('/student/' + tutid)
    }
    render() {
        let tutorialgrp = this.props.tutorialtable.map(x => {
            return (
                <tr key={x.tutid}>
                    <td>{x.tutname}</td>
                    <td>{x.tutgrp}</td>
                    <td>{x.createdby}</td>
                    <td><MDBBtn size="sm" color="green" onClick={() => this.ViewTutorial(x.tutid)}> Select </MDBBtn></td>
                </tr>
            )
        })
        return (
            <React.Fragment>
                <Navbar />
                <MDBContainer>
                    <br />
                    <MDBRow>
                        <MDBCol size="12">
                            <h2>Select Tutorial Group to Mark</h2>
                            <hr />
                            <MDBTable striped>
                                <MDBTableHead>
                                    <tr>
                                        <th>Tutorial Name</th>
                                        <th>Tutorial Group</th>
                                        <th>Created by</th>
                                        <th>Select</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    {tutorialgrp}
                                </MDBTableBody>
                            </MDBTable>
                        </MDBCol>
                    </MDBRow>
                    <MDBBtn color="green" onClick = {this.GoBack} > Back
                       </MDBBtn>
                </MDBContainer>
                <Footer />
            </React.Fragment>
        )
    }
}
MarkingHome.propTypes = {
    showTutorials: PropTypes.func.isRequired,
    showUserTutorial: PropTypes.func.isRequired
}

//This is from the Reducers
//state.Rootreducer.TutorialReducers
const mapStateToProps = state => ({
    tutorialtable: state.tutorial.tutorialgrp,
});

export default connect(mapStateToProps, { showTutorials, showUserTutorial })(MarkingHome)