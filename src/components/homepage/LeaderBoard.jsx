import React, { Component } from 'react'
import { MDBDataTableV5 } from 'mdbreact';

export default class LeaderBoard extends Component {
  
  /**
   * set display to false
   */
  state = {
    dataTable: {},
    display: false
  }
  componentDidMount() {
    this.PopulateTable()
  }

  /**
   * Leaderboard
   * set display to true and display the leaderboard table
   */
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
