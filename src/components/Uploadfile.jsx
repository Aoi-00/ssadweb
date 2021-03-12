import React, { Component } from 'react'
import { MDBInputGroup, MDBBtn } from 'mdbreact';

export default class Uploadfile extends Component {

    // onSubmit = () => {
    //     this.setState

    // }

    // handleChange = (e) => {
    //     this.setState({
    //       tutgrp: e.target.value
    //     })
    // }

    // MarkingComplete = () => {
    //     const form = {
    //         id: this.state.submissionid,
    //         score: this.state.score,
    //         comment: this.state.comment
    //     }
    //     this.props.updateScores(form)
    //     this.props.history.push("/seltut")
    // }

    render() {
        return (
            <MDBInputGroup
                append={
                    <MDBBtn
                        color="mdb-color"
                        outline
                        className="m-0 px-3 py-2 z-depth-0"
                        onClick= {this.onSubmit}
                    >
                        Upload
                    </MDBBtn>
                }
                inputs={
                    <div className="custom-file">
                        <input
                            type="file"
                            className="custom-file-input"
                            id="inputGroupFile01"
                        />
                        <label className="custom-file-label" htmlFor="inputGroupFile01">
                            Choose file
                        </label>
                    </div>
                }
                containerClassName="mb-3"
            />
        )
    }
}
