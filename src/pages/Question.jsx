import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import QuestionList from '../components/QuestionList'
import AddQuestion from '../components/AddQuestion';

class Question extends Component {

    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol size="12">
                    <br/>
                    <h2>List of questions</h2>
                    <hr/>
                        <QuestionList />
                    </MDBCol>
                    <MDBCol size="12">
                    <h2>Add new question</h2>
                    <hr/>
                        <AddQuestion />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }

}
export default Question