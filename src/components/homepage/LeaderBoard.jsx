import React from 'react';
import { MDBDataTableV5, MDBLink, MDBIcon } from 'mdbreact';

export default function Pagination({ leaderboard }) {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'Name',
        field: 'name',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Date submitted',
        field: 'date',
        width: 150,
      },
      {
        label: 'Score',
        field: 'score',
        width: 100,
      },
    ],
    rows: [],
  });
  //console.log(leaderboard)
  leaderboard.map(x => datatable.rows.push({ name: x.name, date: x.date, score: x.score }))


  return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} fullPagination />;
}