import React, { Component } from 'react'
import Footer from '../components/share/Footer'
import Navbar from '../components/share/Navbar'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBInputGroup, MDBAnimation } from "mdbreact"
import CompetitorDetail from '../components/challengerpage/CompetitorDetail'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import { getStudentInfo } from '../Redux/Actions/AuthAction'
import { sendComment, getCurrentUserScore, getCompetitorScore } from '../Redux/Actions/GameActions'

class Competitor extends Component {
    state = {
        studid: localStorage.getItem("compstudid"),
        compid: localStorage.getItem("compid"),
        tutid: localStorage.getItem("comptutid"),
        myldrid: localStorage.getItem("myldrid"),
        comment: ''
    }
    componentDidMount() {
        console.log(this.state)
        this.getCompetitorDetails()
        this.getCompetitorScoreBoard();
        this.getMyScore();
    }
    getCompetitorDetails() {
        const form = {
            id: this.state.studid
        }
        this.props.getStudentInfo(form)
    }
    getCompetitorScoreBoard(){
        const form = {
            studid: this.state.studid,
            tutid: this.state.tutid
        }
        this.props.getCompetitorScore(form)
    }
    getMyScore(){
        const form = {
            leaderboardid: this.state.myldrid
        }
        this.props.getCurrentUserScore(form)
    }
    SendComment = () => {
        const form = {
            compid: this.state.compid,
            comment: this.state.comment
        }
        this.props.sendComment(form)
        this.props.history.push('/challenger')
    }
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }
    GoBack = () => {
        this.props.history.push('/challenger')
    }
    NotLoggedIn = () => {
        this.props.history.push('/logout')
    }
   

    render() {
        console.log(this.comment)
        //To Brendan
        // Competitor Score Board
        console.log(this.props.competitorscore)
        // Current User Score Board
        console.log(this.props.myScore)
        return (
            
            <div>
                <Navbar validateLogin={this.NotLoggedIn} />
                <MDBContainer>
                <MDBAnimation type="slideInLeft">
                    <br />
                    <MDBRow>
                   
                        <MDBCol size="6">
                            <h3>Competitor Detail</h3>
                            <hr />
                            <CompetitorDetail student={this.props.student} />
                        </MDBCol>
                        
                        
                        <MDBCol size="6">
                            <h3>Compose a message to your competitor</h3>
                            <hr />
                            <MDBInput id='comment' value={this.state.comment} label="Comment" icon="comment" onChange={this.handleChange}>
                            </MDBInput>
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
                        </MDBCol>
                      
                    </MDBRow>
                    </MDBAnimation>
                </MDBContainer>
                <Footer />
              
            </div>
        )
    }
}
Competitor.Proptypes = {
    getStudentInfo: Proptypes.func.isRequired,
    sendComment: Proptypes.func.isRequired,
    getCurrentUserScore: Proptypes.func.isRequired,
    getCompetitorScore: Proptypes.func.isRequired
}

const mapStateToProps = state => ({
    student: state.auth.studentinfo,
    myScore: state.game.myscore,
    competitorscore: state.game.competitor
})
export default connect(mapStateToProps, { getStudentInfo, sendComment, getCurrentUserScore, getCompetitorScore })(Competitor)