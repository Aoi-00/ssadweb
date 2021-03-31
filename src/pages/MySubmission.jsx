import { MDBCol, MDBContainer, MDBRow, MDBInput, MDBBtn } from 'mdbreact'
import React, { Component } from 'react'
import StudentCard from '../components/mysubmissionpage/StudentCard'
import Footer from '../components/share/Footer'
import Navbar from '../components/share/Navbar'
import { getStudentSubmission } from '../Redux/Actions/GameActions'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'

class MySubmission extends Component {
    state = {
        tutgrp: localStorage.getItem("tutgrp"),
        studid: localStorage.getItem("studid"),
        email: localStorage.getItem("email"),
        picture: localStorage.getItem("picture"),
        name: localStorage.getItem("name"),
        fbid: localStorage.getItem("fbid"),
        ldrid: this.props.match.params.id,
    }
    componentDidMount() {
        this.getLeaderBoardSubmission()
    }
    getLeaderBoardSubmission() {
        const form = {
            id: this.state.ldrid
        }
        this.props.getStudentSubmission(form)
    }
    NotLoggedIn = () => {
        this.props.history.push('/logout')
    }
    GoBack = () => this.props.history.push('/studentmain')
    render() {
        let ProfComment = this.props.studSubmission.map(x => {
            return (
                <React.Fragment>
                    <MDBInput label="Score" icon="star" disabled value={x.score} />
                    <MDBInput label="Comment" icon="comment" disabled value={x.comment} />
                </React.Fragment>
            )
        })
        let answer = this.props.studSubmission.map(x => <img className="img-fluid" src={x.image} alt="" />)
        return (
            <div>
                <Navbar validateLogin={this.NotLoggedIn} />
                <br />
                <MDBContainer>
                    <MDBRow>
                        <MDBCol size="6">
                            <h3>My Details</h3>
                            <hr />
                            <StudentCard profilepic={this.state.picture} studname={this.state.name} studemail={this.state.email} studtutgrp={this.state.tutgrp} />
                        </MDBCol>
                        <MDBCol size="6">
                            <h3>Professor Comments</h3>
                            <hr />
                            {ProfComment}
                            <MDBBtn color="red" onClick={this.GoBack} size="sm">Back</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    <br />
                    <MDBRow>
                        <MDBCol size="6">
                            <h3>My Answer</h3>
                            <hr />
                            {answer}
                        </MDBCol>
                        <MDBCol size="6">
                            <h3>Standard Answer</h3>
                            <hr />
                            <img src="#" alt="" />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <Footer />
            </div>
        )
    }
}
MySubmission.Proptypes = {
    getStudentSubmission: Proptypes.func.isRequired
}
const mapStateToProps = state => ({
    studSubmission: state.game.submission
})

export default connect(mapStateToProps, { getStudentSubmission })(MySubmission)
