import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';

export default function Pagination({ leaderboard, tutgrp }) {
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
        sort: 'disabled',
        width: 150,
      },
      {
        label: 'Score',
        field: 'score',
        sort: 'asc',
        width: 100,
      },
    ],
    rows: [],
  });
  //console.log(leaderboard)
  leaderboard.filter(x => x.tutgrp === tutgrp).map(x => datatable.rows.push({ name: x.name, date: x.date, score: x.score }))


  return <MDBDataTableV5 hover entriesOptions={[5, 10, 15]} entries={5} pagesAmount={4} data={datatable}  fullPagination />;
} 