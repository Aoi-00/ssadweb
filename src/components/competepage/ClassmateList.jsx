import React, { Component } from 'react'
import { MDBListGroup, MDBListGroupItem, MDBBadge, MDBIcon } from 'mdbreact';

class ClassmateList extends Component {
    selectCompetitor = (name, id) =>{
        this.props.competitorSelect(name,id)
    }

    render() {
        let classmate = this.props.classmates.map(x => {
            return(
                <MDBListGroupItem key={x.studid} className="d-flex justify-content-between align-items-center" onClick={() => this.selectCompetitor(x.name, x.studid)} hover>{x.name}<MDBIcon icon="arrow-right" />
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