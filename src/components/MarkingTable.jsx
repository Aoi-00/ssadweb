import React from 'react';
import { MDBDataTableV5, MDBLink, MDBIcon, MDBInput, MDBBtn  } from 'mdbreact';

export default function Pagination({ markingtable }) {
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
        label: 'Tutorial Group',
        field: 'tutgrp',
        width: 150,
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
        label: 'View',
        field: 'view',
        sort: 'disabled',
        width: 100,
      },
    ],
    rows: [],
  });

markingtable.map(x => datatable.rows.push({
       name: x.name, tutgrp: x.tutgrp, picture: [<img src={x.image}
         width="270" height="200" alt="" />], 
         date: x.date, view:[<MDBBtn color="green" >View Details</MDBBtn>]
        // [<MDBLink to={"/record/" + x.id}><MDBIcon className="red-text" 
        // icon="caret-right" size="3x" className="mr-1" /></MDBLink>]
    }))



  return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} fullPagination />;
}