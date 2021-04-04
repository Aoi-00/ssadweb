import React, { Component } from 'react'
import ChallengerDetail from '../components/challengerpage/ChallengerDetail'
import Footer from '../components/share/Footer'
import Navbar from '../components/share/Navbar'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import { getStudentInfo, getCompeteMyInfo } from '../Redux/Actions/AuthAction'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBProgress } from "mdbreact"
import { getComment, getCurrentUserScore, getCompetitorScore } from '../Redux/Actions/GameActions'
import MyDetails from '../components/challengerpage/MyDetails'

class Challenge extends Component {
    /**
     * state
     * set studid to local storage mystudid
     * set compid to local storage compid
     * set tutid to local storage comptutid
     * set myldrid to local storage oppldrid
     * set challengerid to local storage challengerid
     */
    state = {
        studid: localStorage.getItem("mystudid"),
        compid: localStorage.getItem("compid"),
        tutid: localStorage.getItem("comptutid"),
        myldrid: localStorage.getItem("oppldrid"),
        challengerid: localStorage.getItem("challengerid")
    }
    componentDidMount() {
        this.getCompetitorDetails()
        this.retrieveComment()
        this.getMyScoreBoard()
        this.getOppScore()
        this.getmyDetails()
    }
    /**
     * retrieveComment
     */
    retrieveComment() {
        const form = {
            compid: this.state.compid
        }
        this.props.getComment(form)
    }
    /**
     * getcompetitorDetails
     */
    getCompetitorDetails() {
        const form = {
            id: this.state.challengerid
        }
        this.props.getStudentInfo(form)
    }
    /**
     * getmyDetails
     */
    getmyDetails() {
        const form = {
            id: localStorage.getItem("studid")
        }
        this.props.getCompeteMyInfo(form)
    }
    /**
     * getMyscoreBoard
     */
    getMyScoreBoard() {
        const form = {
            studid: this.state.studid,
            tutid: this.state.tutid
        }
        console.log(form)
        //Call Same function coz it's the opposite of competitor
        this.props.getCompetitorScore(form)
    }
    /**
     * getOppScore
     */
    getOppScore() {
        const form = {
            leaderboardid: this.state.myldrid
        }
        //Call Same function coz it's the opposite of competitor
        this.props.getCurrentUserScore(form)
    }
    /**
     * GoBack
     * navigate to challenger
     */
    GoBack = () => {
        this.props.history.push('/challenger')
    }

    /**
     * notLoggedIn
     */
    NotLoggedIn = () => {
        this.props.history.push('/logout')
    }
    /**
     * Challenger Page
     * @returns Challenger Page
     */
    render() {
        let myscore = this.props.competitorscore.map(x => parseInt(x.score))
        let competitorscore = this.props.challengerScore.map(x => parseInt(x.score))

        let comment = this.props.challengecomment.map(x => x.competitormsg)

        let resultDisplay = (this.props.competitorscore.length == 0) ? <React.Fragment><h4 className="red-text">You have not done this tutorial</h4> <hr/> </React.Fragment> : (myscore[0] < competitorscore[0]) ? <React.Fragment><h3>Final Result</h3><hr/> <img src="https://media.esportsedition.com/wp-content/uploads/2016/07/losingstreak-1068x601.jpg" className="img-fluid" /></React.Fragment> :<React.Fragment><h3>Final Result</h3><hr/> <img src="https://i.ytimg.com/vi/8TwCwHHQ6a8/maxresdefault.jpg" className="img-fluid" /> </React.Fragment>
        return (
            <div>
                <Navbar validateLogin={this.NotLoggedIn} />
                <MDBContainer>
                    <br />
                    <MDBRow>
                        <MDBCol size="6">
                            <h3>My Details</h3>
                            <hr />
                            <MyDetails student={this.props.currentUserInfo} />
                            <br /><br />

                            {this.props.competitorscore && this.props.competitorscore.map(x => {
                                return (
                                    <React.Fragment>
                                        <h3>My Answer</h3>
                                        <hr />
                                        <img src={x.image} className="img-fluid z-depth-1" alt="" />
                                        <br /> <br />
                                        <h3>My Score</h3>
                                        <hr />
                                        <MDBRow>
                                            <MDBCol size="9">
                                                <MDBProgress value={x.score} className="my-2" />
                                            </MDBCol>
                                            <MDBCol size="3">
                                                Score: {x.score}
                                            </MDBCol>
                                        </MDBRow>
                                        <h3>Professor's Comment to me</h3>
                                        <hr />
                                        <p>{(x.comment == '') ? "No Comment" : x.comment}</p>
                                    </React.Fragment>
                                )
                            }
                            )}
                            {resultDisplay}
                            
                        </MDBCol>
                        <MDBCol size="6">
                            <h3>Challenger Detail</h3>
                            <hr />
                            <ChallengerDetail student={this.props.student} />
                            <br />
                            {this.props.challengerScore && this.props.challengerScore.map(x => {
                                return (
                                    <React.Fragment>
                                        <br />
                                        <h3>Competitor's Answer</h3>
                                        <hr />
                                        <img src={x.image} className="img-fluid z-depth-1" alt="" />
                                        <br /> <br />
                                        <h3>Competitors Scores</h3>
                                        <hr />
                                        <MDBRow>
                                            <MDBCol size="9">
                                                <MDBProgress value={x.score} className="my-2" />
                                            </MDBCol>
                                            <MDBCol size="3">
                                                Score: {x.score}
                                            </MDBCol>
                                        </MDBRow>
                                        <h3>Professor's Comment to Competitor</h3>
                                        <hr />
                                        <p>{x.comment}</p>
                                    </React.Fragment>
                                )
                            }
                            )}
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
                <br /><br/><br/>
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
    competitorscore: state.game.competitor,
    currentUserInfo: state.auth.myInfo
})
export default connect(mapStateToProps, { getStudentInfo, getCompeteMyInfo, getComment, getCompetitorScore, getCurrentUserScore })(Challenge)