import React, {useEffect} from 'react';
import { MDBDataTableV5, MDBBtn } from 'mdbreact';

export default function Basic({question}){
  // useEffect (()=> {
  //   console.log(question)
  // });

  const onDelete = (e) => {
    //datatable.filter()
    //console.log({datatable})
};
  const [datatable, setDatatable] = React.useState({
    
    columns: [
      {
        label: '#',
        field: 'questionnumber',
        width: 270,
      },
      {
        label: 'Question',
        field: 'question',
        width: 750,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Remove',
        field: 'remove',
        width: 200,
      },
    ],
    rows: []
  });
  question.map((data, index) => datatable.rows.push({
    questionnumber:index+1,
    question: data.question,
    remove: [<MDBBtn size="sm" color="red"onClick={onDelete}>Remove</MDBBtn>],
  }))
  
  return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} searchTop pagingTop searchBottom={false} data={datatable} />;
}