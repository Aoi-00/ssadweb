import React, { Component } from 'react'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact'

class StatisticalAnalysis extends Component {
    /**
     * 
     */
    state = {
        score: [...this.props.scores.map(x => parseFloat(x.score))],
        count: '',
        average: '',
        standardDeviation: '',
        minimum: '',
        maximum: ''
    }
    componentDidMount() {
       this.CalclateStatistics();       
    }
    /**
     * 
     */
    CalclateStatistics() {
        let count = this.state.score.length
        let minimum = Math.min(...this.state.score)
        let maximum = Math.max(...this.state.score)
        let average = (this.state.score.reduce((total, current) => total += current,0) / count).toFixed(2)
        let standardDeviation = Math.sqrt(this.state.score.map(x => Math.pow(x - average, 2)).reduce((summation, i) => summation += i, 0) / count).toFixed(2)

        this.setState({
            count,
            minimum,
            maximum,
            average,
            standardDeviation
        })
    }
/**
 * 
 * @returns 
 */
    render() {
        return (
            <div>
                <MDBTable hover>
                    <MDBTableHead color="blue" textWhite>
                        <tr>
                            <th>Count</th>
                            <th>Average</th>
                            <th>Standard Deviation</th>
                            <th>Minimum</th>
                            <th>Maximum</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                            <td>{this.state.count}</td>
                            <td>{this.state.average}</td>
                            <td>{this.state.standardDeviation}</td>
                            <td>{this.state.minimum}</td>
                            <td>{this.state.maximum}</td>
                        </tr>
                    </MDBTableBody>
                </MDBTable>
            </div>
        )
    }
}
export default StatisticalAnalysis