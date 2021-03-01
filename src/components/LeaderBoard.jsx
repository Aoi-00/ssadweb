import React from 'react';
import { MDBDataTableV5, MDBBtn, MDBLink, MDBIcon } from 'mdbreact';

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
        label: 'Image',
        field: 'picture',
        width: 270,
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
        sort: 'disabled',
        width: 100,
      },
      {
        label: 'View',
        field: 'view',
        sort: 'disabled',
        width: 100,
      },
    ],
    rows: [],
  });

  leaderboard.map(x => datatable.rows.push({ name: x.name, picture: [<img src={x.image} width="270" height="200" alt="" />], date: x.date, score: x.score, view: [<MDBLink to={"/record/" + x.id}><MDBIcon className="red-text" icon="caret-right" size="3x" className="mr-1" /></MDBLink>] }))



  return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} fullPagination />;
}