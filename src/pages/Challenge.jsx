import React, { Component } from 'react'
import ChallengerDetail from '../components/challengerpage/ChallengerDetail'
import Footer from '../components/share/Footer'
import Navbar from '../components/share/Navbar'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import { getStudentInfo } from '../Redux/Actions/AuthAction'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact"
import { getComment, getCurrentUserScore, getCompetitorScore } from '../Redux/Actions/GameActions'


class Challenge extends Component {
    state = {
        studid: localStorage.getItem("mystudid"),
        compid: localStorage.getItem("compid"),
        tutid: localStorage.getItem("comptutid"),
        myldrid: localStorage.getItem("oppldrid"),
    }
    componentDidMount() {
        this.getCompetitorDetails()
        this.retrieveComment()
        this.getMyScoreBoard()
        this.getOppScore()
    }
    retrieveComment(){
        const form = {
            compid: this.state.compid
        }
        this.props.getComment(form)
    }
    getCompetitorDetails() {
        const form = {
            id: this.state.studid
        }
        this.props.getStudentInfo(form)
    }
    getMyScoreBoard(){
        const form = {
            studid: this.state.studid,
            tutid: this.state.tutid
        }
        console.log(form)
        //Call Same function coz it's the opposite of competitor
        this.props.getCompetitorScore(form)
    }
    getOppScore(){
        const form = {
            leaderboardid: this.state.myldrid
        }
        //Call Same function coz it's the opposite of competitor
        this.props.getCurrentUserScore(form)
    }
    GoBack = () => {
        this.props.history.push('/challenger')
    }
    NotLoggedIn = () => {
        this.props.history.push('/logout')
    }
    render() {
        //Get Current user score
        console.log(this.props.competitorscore)
        // Current challenger Score Board
        console.log(this.props.challengerScore)

        let comment = this.props.challengecomment.map(x => x.competitormsg)
        return (
            <div>
                <Navbar validateLogin={this.NotLoggedIn} />
                <MDBContainer>
                    <br />
                    <MDBRow>
                        <MDBCol size="6">
                            <h3>Challenger Detail</h3>
                            <hr />
                            <ChallengerDetail student={this.props.student} />
                        </MDBCol>
                        <MDBCol size="6">
                            <h3>Challenger Message to you</h3>
                            <hr />
                            <MDBInput disabled value={comment} label="Comment" icon="comment" onChange={this.handleChange}>
                            </MDBInput>
                            <MDBBtn
                                onClick={this.GoBack}
                                color="red"
                                className="m-0 px-3 py-2 z-depth-0">
                                Back
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <br/>
                <Footer />
            </div>
        )
    }
}
Challenge.Proptypes = {
    getStudentInfo: Proptypes.func.isRequired,
    getComment: Proptypes.func.isRequired
}

const mapStateToProps = state => ({
    student: state.auth.studentinfo,
    challengecomment: state.game.comment,
    challengerScore: state.game.myscore,
    competitorscore: state.game.competitor
})
export default connect(mapStateToProps, { getStudentInfo, getComment, getCompetitorScore, getCurrentUserScore })(Challenge)