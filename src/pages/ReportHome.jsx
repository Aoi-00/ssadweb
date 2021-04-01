import React, { Component } from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBTable, MDBBtn, MDBTableBody, MDBTableHead } from 'mdbreact'
import Navbar from '../components/share/Navbar'
import Footer from '../components/share/Footer'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { showProfTutorial } from '../Redux/Actions/TutorialAction'

class Report extends Component {
    state = {
        tutgrp: localStorage.getItem("tutgrp"),
        name: localStorage.getItem("name"),
    }
    componentDidMount() {
        this.GetTutorials()
    }
    GetTutorials = () => {
        const form = {
            tutgrp: this.state.tutgrp,
            name: this.state.name
        }
        this.props.showProfTutorial(form);
    }
    ViewReport = (tutid, tutname) =>{
        localStorage.setItem("selectedTutId", tutid)
        localStorage.setItem("selectedTutName", tutname)
        this.props.history.push("/report")
    }
    render() {
        let display = this.props.tutorialtable.map(x => {
            return (
                <tr key={x.tutid}>
                    <td>{x.tutname}</td>
                    <td>{x.tutgrp}</td>
                    <td>{x.createdby}</td>
                    <td><MDBBtn size="sm" color="blue" onClick={() => this.ViewReport(x.tutid, x.tutname)}> View </MDBBtn>
                    </td>
                </tr>
            )
        })
        return (
            <div>
                <Navbar />
                <br />
                <MDBContainer>
                    <MDBRow>
                        <MDBCol size="12">
                            <h3>Select Tutorial To View Report Summary</h3>
                            <hr />
                            <MDBTable striped hover>
                                <MDBTableHead>
                                    <tr>
                                        <th>Assignment Name</th>
                                        <th>Tutorial Group</th>
                                        <th>Created by</th>
                                        <th>View</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    {display}
                                </MDBTableBody>
                            </MDBTable>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <Footer />
            </div>
        )
    }
}
Report.propTypes = {
    showProfTutorial: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    tutorialtable: state.tutorial.tutorialgrp,
});

export default connect(mapStateToProps, { showProfTutorial })(Report)