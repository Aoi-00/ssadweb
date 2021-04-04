import React, { Component } from 'react'
import { MDBInput, MDBBtn } from 'mdbreact';

import { connect } from 'react-redux'
import { addTutorial } from '../../Redux/Actions/TutorialAction'

class AddTutorial extends Component {

  /**
   * state
   * set tutGroup to local storage tutgrp
   * set createdby to local storage name
   * set usertype to local storage usertype
   * set coin to 50
   * set tutName , nameError to ""
   */
    state = {
        tutGroup: localStorage.getItem("tutgrp"),
        tutName: '',
        createdby: localStorage.getItem("name"),
        coins: 50,
        loading: false,
        userType: localStorage.getItem("usertype"),
        nameError: ""
    }
/**
 * Validate if the string is empty
 * @returns false
 */
    validate = () => {
        let nameError = "";
        if (!this.state.tutName) {
            nameError = "Assignment name cannot be empty";
            this.setState({nameError})
            return false;
        }
        return true;
    }

    /**
     * onSubmit 
     */
    onSubmit = () => {
        const post = {
            tutname: this.state.tutName,
            tutgrp: this.state.tutGroup,
            createdby: this.state.createdby,
            difficulty: this.state.difficulty,
            coins: this.state.coins,

        }
        const isValid = this.validate();
        if (isValid) {
            this.setState({
                loading: !this.state.loading,
                tutName: "",
                nameError:""
            })
            this.props.addTut(post);
        }
    }

/**
 * handlceChange
 * @param {*} e handle all the changes that were received
 */
    handleChange = (e) => { //to handle change in inputs
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

   /**
    * getValue
    * @param {*} e  handle all the changes when the number of coins is amended
    */
    getValue = (e) => {
        this.setState({
            coins: e.target.value
        })
    }

    /**
     * handleSelectList
     * @param {*} e  handle selection list
     */
    handleSelectList = (e) => {
        this.setState({ difficulty: e.target.value })
    }
    /**
     * handleTutList
     * @param {*} e handle the tut list
     */
    handleTutList = (e) => {
        this.setState({ tutGroup: e.target.value })
    }

    /**
     * ComponentDidupdate
     * @param {*} prevProps to check if there is any update from the previous props
     */
    componentDidUpdate(prevProps) {
        if (prevProps.tutGroup !== this.props.tutGroup) {
            this.setState({ loading: false })
        }
    }
/**
 * Display all the assingment lists that are created
 * @returns 
 */
    render() {
        const { loading } = this.state;
        return (
            <div>
                <form>
                    <div className="black-text">
                        <MDBInput value={this.state.tutName} label="Enter Assignment Name" id='tutName' onChange={this.handleChange} icon="user-plus" group type="text" validate error="wrong"
                            success="right" />
                        <div style={{ fontSize: 20, color: "rgb(255, 61, 61)" }}> {this.state.nameError}</div>
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
                        <MDBBtn color="red" onClick={this.props.onBack}> Back
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