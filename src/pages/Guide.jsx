import React, { Component } from 'react'

export default class Guide extends Component {
    state = {
        arrayToLoop: ["Cat", "Dog", "Bird", "Mouse"]
    }
    ForLoopArray() {
        var display = []
        for (var i = 0; i < this.state.arrayToLoop.length; i++) {
            display.push(<option value={this.state.arrayToLoop[i]}> {this.state.arrayToLoop[i]} </option>)
        }
        return display;
    }
    ES5LoopArray() {
        const display1 = this.state.arrayToLoop.map(function (array) {
            return <option value={array}> {array} </option>;
        });
        return display1
    }
    ArrowFunctionLoop = () => {
        return this.state.arrayToLoop.map(array => {
            return (<option value={array}> {array} </option>);
        })
    }
    render() {
        return (
            <div>
                <p>If we write in static, we write like this</p>
                <p>Use this as a reference</p>
                <select id="tutgrp" className="browser-default custom-select">
                    <option value={'TS1'}>TS1</option>
                    <option value={'TS2'}>TS2</option>
                    <option value={'TS3'}>TS3</option>
                    <option value={'TS4'}>TS4</option>
                </select>

                <br />
                <p>This method also works using a for loop, easier to understand for u</p>
                <select id="tutgrp1" className="browser-default custom-select">
                    {this.ForLoopArray()}
                </select>
                <br />

                <p>This method also works as a loop too, but in Javascript ES5 Syntax but shorter</p>
                <select id="tutgrp1" className="browser-default custom-select">
                    {this.ES5LoopArray()}
                </select>
                <br />

                <p>This method also works as a loop too, but in Javascript ES6 syntax, where u will all the arrow function</p>
                <select id="tutgrp1" className="browser-default custom-select">
                    {this.ES5LoopArray()}
                </select>

                <p>All of these work in the same way, just choose which one ur comfortable with to code to: HY / Brendan</p>
            </div>
        )
    }
}
