import React from 'react'
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';
import SolutionModal from './SolutionModal'


export default function TutQuestionList({ questions, removeQuestion }) {
  let onDelete = (questid) => {
    removeQuestion(questid)
  }
  /**
   * TutQuestionList
   */
  return (
    <div>
      <MDBTable striped>
        <MDBTableHead>
          <tr>
            <th>#</th>
            <th>Question</th>
            <th>Remove</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {questions && questions.map((x, index) => {
            return (
              <tr key={x.questid}>
                <td>{index + 1}</td>
                <td>{x.question}</td>
                <td><MDBBtn size="sm" color="red" onClick={() => onDelete(x.questid)}>Remove</MDBBtn></td>              
              </tr>
            )
          })}
        </MDBTableBody>
      </MDBTable>
    </div>
  )
}
