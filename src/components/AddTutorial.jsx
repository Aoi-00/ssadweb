import React, { Component } from 'react'
import { MDBInput, MDBBtn } from 'mdbreact';

export default class AddTutorial extends Component {
    UserSubmitQuestion = () => {
        //Method
    }
    render() {
        return (
            <div>
                <form>
                    <div className="grey-text">
                        <MDBInput label="Enter Tutorial Group" icon="user-plus" group type="email" validate error="wrong"
                            success="right" />
                         <MDBInput label="Enter Description" icon="user-alt" group type="email" validate error="wrong"
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
