import React from 'react';
import { MDBDataTableV5, MDBBtn } from 'mdbreact';

export default function Basic() {
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
    rows: [
      {
        questionnumber: "1",
        question: 'Tiger Nixon',
        remove: [<MDBBtn size="sm" color="red">Remove</MDBBtn>],
      },
      {
        questionnumber: "2",
        question: 'Brendan',
        remove: [<MDBBtn size="sm" color="red">Remove</MDBBtn>],
      }
    ],
  });

  return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} searchTop pagingTop searchBottom={false} data={datatable} />;
}