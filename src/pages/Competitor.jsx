import React, { Component } from 'react'
import Footer from '../components/share/Footer'
import Navbar from '../components/share/Navbar'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBInputGroup, MDBAnimation, MDBProgress } from "mdbreact"
import CompetitorDetail from '../components/challengerpage/CompetitorDetail'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import { getStudentInfo, getCompeteMyInfo } from '../Redux/Actions/AuthAction'
import { sendComment, getCurrentUserScore, getCompetitorScore } from '../Redux/Actions/GameActions'
import MyDetails from '../components/challengerpage/MyDetails'

class Competitor extends Component {
    /**
     * state
     * set studid to local storage compstudid
     * set compid to local storage compid
     * set tutid to local storage comptutid
     * set myldrid to local storage myldrid
     * set mystudid to local storage studid
     * set comment and commentError to ""
     */
    state = {
        studid: localStorage.getItem("compstudid"),
        compid: localStorage.getItem("compid"),
        tutid: localStorage.getItem("comptutid"),
        myldrid: localStorage.getItem("myldrid"),
        mystudid: localStorage.getItem("studid"),
        comment: '',
        commentError:""
    }
    componentDidMount() {
        console.log(this.state)
        this.getCompetitorDetails()
        this.getCompetitorScoreBoard();
        this.getMyScore();
        this.getmyDetails();
    }
/**
 * validate
 * @returns error handling when comment is empty
 */
    validate() {
        let commentError = "";
        if (!this.state.comment){
            commentError= "Comment cannot be empty";
            this.setState({commentError});
            return false;
        }
        return true;
    }
/**
 * getCompetitorDetails
 */
    getCompetitorDetails() {
        const form = {
            id: this.state.studid
        }
        this.props.getStudentInfo(form)
    }
    /**
     * getmyDetails
     */
    getmyDetails() {
        const form = {
            id: this.state.mystudid
        }
        this.props.getCompeteMyInfo(form)
    }
    /**
     * getCompetitorScoreBoard
     */
    getCompetitorScoreBoard() {
        const form = {
            studid: this.state.studid,
            tutid: this.state.tutid
        }
        this.props.getCompetitorScore(form)
    }
    /**
     * getMyScore
     */
    getMyScore() {
        const form = {
            leaderboardid: this.state.myldrid
        }
        this.props.getCurrentUserScore(form)
    }
    /**
     * SendComment
     */
    SendComment = () => {
       
        const form = {
            compid: this.state.compid,
            comment: this.state.comment
        }
        const isValid = this.validate();
        if (isValid) {
            this.setState({commentError: ""});
            this.props.sendComment(form)
            this.props.history.push('/challenger')
        }
    }

    /**
     * handleChange
     * @param {*} e 
     */
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }
    /**
     * GoBack
     */
    GoBack = () => {
        this.props.history.push('/challenger')
    }

    /**
     * NotLoggedIn
     */
    NotLoggedIn = () => {
        this.props.history.push('/logout')
    }

/**
 * Competitor Page
 * @returns Competitor Page
 */
    render() {
        let myscore = this.props.myScore.map(x => parseInt(x.score))
        let competitorscore = this.props.competitorscore.map(x => parseInt(x.score))
        let resultDisplay = (this.props.competitorscore.length == 0) ? <React.Fragment><h4 className="red-text">This Student have not done this tutorial</h4> <hr/> </React.Fragment> : (myscore[0] < competitorscore[0]) ? <React.Fragment><h3>Final Result</h3><hr/> <img src="https://media.esportsedition.com/wp-content/uploads/2016/07/losingstreak-1068x601.jpg" className="img-fluid" /></React.Fragment> :<React.Fragment><h3>Final Result</h3><hr/> <img src="https://i.ytimg.com/vi/8TwCwHHQ6a8/maxresdefault.jpg" className="img-fluid" /> </React.Fragment>
        
        return (
            <div>
                <Navbar validateLogin={this.NotLoggedIn} />
                <MDBContainer>
                    <MDBAnimation type="slideInLeft">
                        <br />
                        <MDBRow>
                            <MDBCol size="6">
                                <h3>My Details</h3>
                                <hr />
                                <br />
                                <MyDetails student={this.props.currentUserInfo} />
                                <br /><br />
                                {this.props.myScore && this.props.myScore.map(x => {
                                    return (
                                        <React.Fragment>
                                            <br />
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
                                            <br />
                                            <h3>Professor's Comment to me</h3>
                                            <hr />
                                            <p>{(x.comment == '') ? "No Comment" : x.comment}</p>
                                        </React.Fragment>
                                    )
                                }
                                )}
                            </MDBCol>
                            <MDBCol size="6">
                                <h3>Competitor Details</h3>
                                <hr />
                                <CompetitorDetail student={this.props.student} />
                                <br />
                                {this.props.competitorscore && this.props.competitorscore.map(x => {
                                    return (
                                        <React.Fragment>
                                            <br /><br /><br />
                                            <h3>Competitor's Answer</h3>
                                            <hr />
                                            <img src={ x.image} className="img-fluid z-depth-1" alt="" />
                                            <br /> <br />
                                            <h3>Competitor's Score</h3>
                                            <hr />
                                            <MDBRow>
                                                <MDBCol size="9">
                                                    <MDBProgress value={x.score} className="my-2" />
                                                </MDBCol>
                                                <MDBCol size="3">
                                                    Score: {x.score}
                                                </MDBCol>
                                            </MDBRow>
                                            <br />
                                            <h3>Professor's Comment to Competitor</h3>
                                            <hr />
                                            <p>{x.comment}</p>
                                        </React.Fragment>
                                    )
                                }
                                )}
                             
                                <br />
                                <h3>Compose a message to your competitor</h3>
                                <hr />
                                <MDBInput id='comment' value={this.state.comment} label="Comment" icon="comment" onChange={this.handleChange}>
                                </MDBInput>
                                <div style={{ fontSize: 20, color: "rgb(255, 61, 61)" }}> {this.state.commentError}</div>
                                <MDBBtn
                                    onClick={this.SendComment}
                                    color="blue"
                                    className="m-0 px-3 py-2 z-depth-0">
                                    Send Message
                            </MDBBtn>
                                <MDBBtn
                                    onClick={this.GoBack}
                                    color="red"
                                    className="m-0 px-3 py-2 z-depth-0">
                                    Back
                            </MDBBtn>
                            <br/><br/>
                            {resultDisplay}
                            </MDBCol>
                        </MDBRow>
                    </MDBAnimation>
                </MDBContainer>
                <br/><br/>
                <br />
                <Footer />

            </div>
        )
    }
}
Competitor.Proptypes = {
    getStudentInfo: Proptypes.func.isRequired,
    sendComment: Proptypes.func.isRequired,
    getCurrentUserScore: Proptypes.func.isRequired,
    getCompetitorScore: Proptypes.func.isRequired,
    getCompeteMyInfo: Proptypes.func.isRequired
}

const mapStateToProps = state => ({
    student: state.auth.studentinfo,
    myScore: state.game.myscore,
    competitorscore: state.game.competitor,
    currentUserInfo: state.auth.myInfo
})
export default connect(mapStateToProps, { getStudentInfo, sendComment, getCurrentUserScore, getCompetitorScore, getCompeteMyInfo })(Competitor)