import React, { Component } from 'react'
import { MDBInput, MDBBtn } from 'mdbreact';

import { connect } from 'react-redux'
import { addTutorial } from '../../Redux/Actions/TutorialAction'

class AddTutorial extends Component {
    state = {
        tutGroup: localStorage.getItem("tutgrp"),
        tutName: '',
        createdby: localStorage.getItem("name"),
        coins: 50,
        loading: false,
        userType: localStorage.getItem("usertype"),
    }
    onSubmit = () => {
        const post = {
            tutname: this.state.tutName,
            tutgrp: this.state.tutGroup,
            createdby: this.state.createdby,
            difficulty: this.state.difficulty,
            coins: this.state.coins,

        }
        this.setState({
            loading: !this.state.loading,
            tutName: ""
        })
        this.props.addTut(post);
    }

    //    onBack =() =>{
    //         this.props.history.push('/home')
    //         // This.props.navigate()


    //     }
    handleChange = (e) => { //to handle change in inputs
        this.setState({
            [e.target.id]: e.target.value,
        })
    }
    getValue = (e) => {
        this.setState({
            coins: e.target.value
        })
    }
    handleSelectList = (e) => {
        this.setState({ difficulty: e.target.value })
    }
    handleTutList = (e) => {
        this.setState({ tutGroup: e.target.value })
    }
    componentDidUpdate(prevProps) {
        if (prevProps.tutGroup !== this.props.tutGroup) {
            this.setState({ loading: false })
        }
    }

    render() {
        const { loading } = this.state;
        return (
            <div>
                <form>
                    <div className="black-text">
                        <MDBInput value={this.state.tutName} label="Enter Assignment Name" id='tutName' onChange={this.handleChange} icon="user-plus" group type="text" validate error="wrong"
                            success="right" />
                        {(this.state.userType === "Professor") &&
                            <React.Fragment>
                                <label htmlFor="difficulty">Select Tutorial Group</label>
                                <select onChange={this.handleTutList} value={this.state.tutGroup} id="tutGroup" className="browser-default custom-select">
                                    <option value={'TS1'}>TS1</option>
                                    <option value={'TS2'}>TS2</option>
                                    <option value={'TS3'}>TS3</option>
                                    <option value={'TS4'}>TS4</option>
                                </select>
                            </React.Fragment>}
                    </div>
                    <label htmlFor="coins">Number of coins: {this.state.coins}</label>
                    <input type="range" id="coins" onChange={this.getValue} min="0" max="100" className="custom-range" />
                    <div className="text-center">
                        <MDBBtn onClick={this.onSubmit} color="blue" disabled={loading} >
                            {loading && <span>Submitting</span>}
                            {!loading && <span>Submit</span>}</MDBBtn>
                        <MDBBtn color="green" onClick={this.props.onBack}> Back
                       </MDBBtn>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    tutGroup: state.tutorial.tutorialgrp
});

export default connect(mapStateToProps, { addTutorial })(AddTutorial) //to be changed