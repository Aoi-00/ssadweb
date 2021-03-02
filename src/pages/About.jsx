import React, { Component } from 'react'

class About extends Component {
    render() {
        let classes = ["TS1", "TS2", "TS3"];
        let dropdown = classes.map(x => {
            return <option value = {x}> {x} </option> //creating multiple options
        })
        return (
            <div>
                <select onChange = {this.handleSelectList} id="tutgrp" className="browser-default custom-select">
                    {dropdown} 
                </select>
                
            </div>
        )
    }
}
export default About