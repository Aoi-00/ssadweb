import React, { Component } from 'react'
import { MDBInput, MDBBtn } from 'mdbreact';

export default class AddQuestion extends Component {
    UserSubmitQuestion = () => {
        //Method
    }
    render() {
        return (
            <div>
                <form>
                    <div className="grey-text">
                        <MDBInput label="Enter Question" icon="question" group type="email" validate error="wrong"
                            success="right" />
                    </div>
                    <div className="text-center">
                        <MDBBtn>Submit</MDBBtn>
                    </div>
                </form>
            </div>
        )
    }
}
