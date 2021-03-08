import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import MarkingTable from '../components/MarkingTable'
import {connect } from 'react-redux'
import Proptypes from 'prop-types'
import {fetchLeaderboard} from '../Redux/Actions/GameActions'
import IndividualMark from '../components/IndividualMark'
import StudentInfo from '../components/StudentInfo';
import MarkDropDown from '../components/MarkDropDown';
import MarkScoreComment from '../components/MarkScoreComment';


class Marking extends Component {
    componentWillMount (){
        this.props.fetchLeaderboard();
    }
    //<MarkingTable markingtable = {this.props.leaderboard}/>
    render() {
        
        return (

            <MDBContainer>
                <MDBRow>
                    <MDBCol size = "12">
                    <StudentInfo/>
                    </MDBCol>
                    
                   
                    <MDBCol size = "6">
                    <br/>
                    <MarkDropDown/>
                    </MDBCol>
                    <MDBCol size = "6"> 
                    <br/>
                        <MarkScoreComment/>
                        </MDBCol>
                    
                </MDBRow>
            </MDBContainer>
        )
    }
}

Marking.Proptypes ={
    fetchLeaderboard: Proptypes.func.isRequired
}

const mapStateToProps = state => ({
    leaderboard : state.game.records
})
export default connect(mapStateToProps,{fetchLeaderboard}) (Marking)    