import React, { Component } from 'react'
import { MDBInput, MDBBtn } from 'mdbreact';

import { connect } from 'react-redux'
import { addTutorial } from '../Redux/Actions/TutorialAction'

class AddTutorial extends Component {
    state = {
        tutGroup: 'TS1',
        tutName: '',
        createdby: localStorage.getItem("name"),
        difficulty: 'Easy',
        coins: 50
    }
    onSubmit = () => {
        const post = {
            tutname: this.state.tutName,
            tutgrp: this.state.tutGroup,
            createdby: this.state.createdby,
            difficulty: this.state.difficulty,
            coins: this.state.coins
        }
        this.props.addTut(post);
    }
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

    render() {
        return (
            <div>
                <form>
                    <div className="black-text">
                        <MDBInput label="Enter Assignment Name" id='tutName' onChange={this.handleChange} icon="user-plus" group type="text" validate error="wrong"
                            success="right" />
                        <label htmlFor="difficulty">Select Tutorial Group</label>
                        <select onChange={this.handleTutList} value={this.state.tutGroup} id="tutGroup" className="browser-default custom-select">
                            <option value={'TS1'}>TS1</option>
                            <option value={'TS2'}>TS2</option>
                            <option value={'TS3'}>TS3</option>
                            <option value={'TS4'}>TS4</option>
                        </select>
                    </div>
                    <label htmlFor="difficulty">Difficulty Level</label>
                    <select onChange={this.handleSelectList} value={this.state.difficulty} id="diffuculty" className="browser-default custom-select">
                        <option value={'Easy'}>Easy</option>
                        <option value={'Medium'}>Medium</option>
                        <option value={'Hard'}>Hard</option>
                    </select>
                    <br /><br />
                    <label htmlFor="coins">Number of coins: {this.state.coins}</label>
                    <input type="range" id="coins" onChange={this.getValue} min="0" max="100" className="custom-range" />
                    <div className="text-center">
                        <MDBBtn onClick={this.onSubmit}>Submit</MDBBtn>
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