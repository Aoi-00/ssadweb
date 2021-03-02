import React from 'react';
import { MDBTable, MDBTableBody, MDBTableFoot, MDBTableHead } from 'mdbreact';
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
import Search from '../components/Search'
import SelectPage from '../components/SelectPage'
import HamburgerMenu from '../components/HamburgerMenu'

const BasicTable = () => {
  return (
    //<MDBTable hovered>
    
    <MDBTable bordered>
      <MDBTableHead>
        <tr>
        <HamburgerMenu></HamburgerMenu>
          <th>SPACE</th>
          <th>
          <MDBCol md="12">
             <MDBFormInline className="md-form mr-auto mb-4">
        
          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
          <MDBBtn color="unique" rounded size="sm" type="submit" className="mr-auto">
          Search
        </MDBBtn>
      </MDBFormInline>
    </MDBCol>
          </th>
          <th>
          <MDBCol md="12">
             <MDBFormInline className="md-form mr-auto mb-4">
          <MDBBtn color="green" rounded size="sm" type="submit" className="mr-auto">
          Cart
        </MDBBtn>
        </MDBFormInline>
    </MDBCol>
              
                  
                  </th>
          <th>
         test
          </th>
          
         

        </tr>
        <tr>
          <th>Last</th>
          <th>
          </th>
          <th>Last</th>
          <th>Handle</th>
        </tr>
        <tr>
          <th>Last</th>
          <th>First</th>
          <th>Last</th>
          <th>Handle</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th>Last</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th>Last</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </MDBTableBody>
      <MDBTableFoot>
      <tr>
          <th>Footer </th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th>Last</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <th>Footer </th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th>Last</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </MDBTableFoot>
    </MDBTable>
  );
}

export default BasicTable;
