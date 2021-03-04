import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import QuestionList from '../components/QuestionList'
import AddQuestion from '../components/AddQuestion';


import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { showQuestion } from '../Redux/Actions/QuestActions'

class Question extends Component {
    state = {
<<<<<<< HEAD
        tutid: this.props.match.params.id
    }
    componentDidMount(){
        console.log(this.state)
    }
=======
        tutid: this.props.match.params.id,
    };

    componentDidMount() {
        this.props.showQuestion({"tutid":this.state.tutid});
        console.log(this.props.tutquestion, "tutid: "+ this.state.tutid);
    }

>>>>>>> f6d7097c0b41d26571c9968e662f8adfecbd83dd
    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol size="12">
                    <br/>
                    <h2>List of questions</h2>
                    <hr/>
                        <QuestionList question ={this.props.tutquestion} />
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

Question.propTypes = {
    showQuestion: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    tutquestion: state.quest.questions,
});


export default connect(mapStateToProps, {showQuestion})(Question)