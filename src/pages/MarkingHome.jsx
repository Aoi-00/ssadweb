import React, { Component } from 'react'
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { showTutorials } from '../Redux/Actions/TutorialAction'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class MarkingHome extends Component {
    componentDidMount() {
        this.props.showTutorials();
    }
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
            <div>
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
                </MDBContainer>
            </div>
        )
    }
}
MarkingHome.propTypes = {
    showTutorials: PropTypes.func.isRequired,
}

//This is from the Reducers
//state.Rootreducer.TutorialReducers
const mapStateToProps = state => ({
    tutorialtable: state.tutorial.tutorialgrp,
});

export default connect(mapStateToProps, { showTutorials })(MarkingHome)