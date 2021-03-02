import React, { Component } from 'react';

class SelectPage extends Component {
  render () {
    return(
      <span>
        <select className="mySelect">
          <option> All </option>
          <option value="1">TS1</option>
          <option value="2">TS2</option>
          <option value="3">TS3</option>
        </select>
      </span>
    );
  }
}

export default SelectPage;