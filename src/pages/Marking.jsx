import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import MarkingTable from '../components/MarkingTable'
import {connect } from 'react-redux'
import Proptypes from 'prop-types'
import {fetchLeaderboard} from '../Redux/Actions/GameActions'
import IndividualMark from '../components/IndividualMark'


class Marking extends Component {
    componentWillMount (){
        this.props.fetchLeaderboard();
    }
    
    render() {
        return (

            <MDBContainer>
                <MDBRow>
                    <MDBCol>
                        <MarkingTable markingtable = {this.props.leaderboard}/>
                        <IndividualMark/>
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