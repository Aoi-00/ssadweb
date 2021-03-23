import React, { Component } from 'react'
import { MDBListGroup, MDBListGroupItem, MDBBadge, MDBIcon } from 'mdbreact';

class ClassmateList extends Component {
    handleClick = (e) =>{
        alert(e.target.id)
    }
    render() {
        let classmate = this.props.classmates.map(x => {
            return(
                <MDBListGroupItem className="d-flex justify-content-between align-items-center" id={"item"+ x} onClick={this.handleClick} hover>{x}<MDBIcon icon="arrow-right" />
                </MDBListGroupItem>
            )
        })
        return (
            <div>
                <MDBListGroup style={{ width: "22rem" }}>
                   {classmate}
                </MDBListGroup>
            </div>
        )
    }
}
export default ClassmateList