import { MDBCol, MDBContainer, MDBRow, MDBInput, MDBBtn } from 'mdbreact'
import React, { Component } from 'react'
import StudentCard from '../components/mysubmissionpage/StudentCard'
import Footer from '../components/share/Footer'
import Navbar from '../components/share/Navbar'
import { getStudentSubmission } from '../Redux/Actions/GameActions'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'

class MySubmission extends Component {
    /**
     * state
     * set tutgrp to local storage tutgrp
     * set studid to local storage studid
     * set email to local storage emaol
     * set picture to local storage picture
     * set name to local storage name
     * set fbid to local storage fbid
     * ldrid : id
     */
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
    /**
     * getLeaderBoardSubmission
     */
    getLeaderBoardSubmission() {
        const form = {
            id: this.state.ldrid
        }
        this.props.getStudentSubmission(form)
    }

    /**
     * NotLoggedIn
     */
    NotLoggedIn = () => {
        this.props.history.push('/logout')
    }
    /**
     * GoBack
     */
    GoBack = () => this.props.history.push('/studentmain')
    /**
     * MySubmission page
     * @returns MySubmission page
     */
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
                            <h3>My Answer</h3>
                            <hr />
                            {answer}
                        </MDBCol>
                    </MDBRow>
                    <br />
                    <MDBRow center>
                        <MDBCol size="6">
                            <h3>Professor Comments</h3>
                            <hr />
                            {ProfComment}
                            <MDBBtn color="red" onClick={this.GoBack} size="sm">Back</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <br /><br /><br />
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
