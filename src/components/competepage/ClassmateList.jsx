import React, { Component } from 'react'
import { MDBListGroup, MDBListGroupItem, MDBBadge, MDBIcon } from 'mdbreact';

class ClassmateList extends Component {
    state = {
        hover: false
    }
    selectCompetitor = (name, id) =>{
        this.props.competitorSelect(name,id)
    }
    onHover = () => {
        this.setState({hover : !this.state.hover})
    }

    render() {
        var linkColor = (this.state.hover) ? {color: 'blue'} : {color: 'grey'}
        let classmate = this.props.classmates.map(x => {
            return(
                <MDBListGroupItem onMouseOver={this.onHover} onMouseLeave={this.onHover} key={x.id} className="d-flex justify-content-between align-items-center" onClick={() => this.selectCompetitor(x.name, x.studid)} hover>{x.name}<MDBIcon style={linkColor} icon="arrow-right" />
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