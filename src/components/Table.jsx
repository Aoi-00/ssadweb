import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: 'Creator Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Question',
        field: 'question',
        sort: 'asc',
        width: 270
      },
      
    ],
    rows: [
      {
        name: 'prof A',
        question: 'Place to Exercise',
      },
      {
        name: 'prof B',
        question: 'Fire accident prone',
      },
      {
        name: 'prof A',
        question: 'Quiet',
      },
      {
        name: 'prof C',
        question: 'nearby polyclinic',
      },
      {
        name: 'prof C',
        question: 'Safe',
      },
      {
        name: 'prof C',
        question: 'Convenient',
      },
      {
        name: 'prof C',
        question: 'Fun sources of entertainment',
      },
      {
        name: 'prof B',
        question: 'Cheap',
      },
      {
        name: 'prof C',
        question: 'Have kids',
      },
      {
        name: 'prof C',
        question: 'Have pets',
      },
     
     
     
    ]
  };
  return (
    <MDBDataTable
      scrollY
      maxHeight="80vh"
      theadColor= 'white'
      tbodyColor= 'white'
      striped
      bordered
      small
      data={data}
      
    />
  );
}

export default DatatablePage;