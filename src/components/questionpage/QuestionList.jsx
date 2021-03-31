import React from 'react'
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';
import SolutionModal from './SolutionModal'


export default function QuestionList({ questions, addQuestion }) {
  let onAdd = (questid) => {
    addQuestion(questid)
  }
  return (
    <div>
      <MDBTable striped>
        <MDBTableHead>
          <tr>
            <th>#</th>
            <th>Question</th>
            <th>Add Question</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {questions && questions.map((x, index) => {
            return (
              <tr key={x.questid}>
                <td>{index + 1}</td>
                <td>{x.question}</td>
                <td><MDBBtn size="sm" color="blue" onClick={() => onAdd(x.questid)}>Add</MDBBtn></td>              
              </tr>
            )
          })}
        </MDBTableBody>
      </MDBTable>
    </div>
  )
}
