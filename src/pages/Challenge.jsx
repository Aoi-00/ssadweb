import React, { Component } from 'react'
import ChallengerDetail from '../components/challengerpage/ChallengerDetail'
import Footer from '../components/share/Footer'
import Navbar from '../components/share/Navbar'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import { getStudentInfo } from '../Redux/Actions/AuthAction'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact"
import { getComment } from '../Redux/Actions/GameActions'


class Challenge extends Component {
    state = {
        studid: localStorage.getItem("compstudid"),
        compid: localStorage.getItem("compid"),
    }
    componentDidMount() {
        this.getCompetitorDetails()
        this.retrieveComment()
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
    GoBack = () => {
        this.props.history.push('/challenger')
    }
    render() {
        let comment = this.props.challengecomment.map(x => x.competitormsg)
        return (
            <div>
                <Navbar />
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
    challengecomment: state.game.comment
})
export default connect(mapStateToProps, { getStudentInfo, getComment })(Challenge)