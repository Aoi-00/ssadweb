import React, { Component } from 'react'
import { MDBDataTableV5 } from 'mdbreact';

<<<<<<< HEAD
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


  return <MDBDataTableV5 hover entriesOptions={[5, 10, 15]} entries={5} pagesAmount={4} data={datatable} searchTop  searchBottom={false} fullPagination />;
}
=======
export default class LeaderBoard extends Component {
  state = {
    dataTable: {},
    display: false
  }
  componentDidMount() {
    this.PopulateTable()
  }
  PopulateTable() {
    this.setState({
      display: true,
      dataTable: {
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
        rows: [...this.props.leaderboard.filter(x => x.tutgrp === this.props.tutgrp).map(x => ({ name: x.name, date: x.date, score: x.score }))],
      }
    })
  }
  render() {
    return (
      <div>
        {this.state.display && <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={this.state.dataTable} />}
      </div>
    )
  }
}
>>>>>>> 862de6381ff7531484cfd1f13215f198bad8e2cd
