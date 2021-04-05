import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'


class TutorialAvgGraph extends Component {
    /**
     * state 
     * set chartData to {}
     * data = GraphData
     */
    state = {
        chartData: {},
        data: this.props.GraphData
    }
    componentDidMount() {
        this.PopulateData()
    }
    /**
     * PopulateData
     */
    PopulateData = () => {
        console.log(this.state.data)
        this.setState({
            chartData: {
                labels: [...this.state.data.map(x => x.tutname)],
                datasets: [{
                    label: 'Score',
                    data: [...this.state.data.map(x => parseFloat(x.average)),0],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1,
                }],
            }
        })
    }
    /**
     * TutorialAvgGraph
     * @returns TutorialAvgGraph
     */
    render() {
        const options = {
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Tutorial Name'
                    },
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: "Average Score"
                    },
                }],
            }
            
        }
        return (
            <div>
                <Bar
                    data={this.state.chartData}
                    width={100}
                    height={50}
                    options={options}
                />
            </div>
        )
    }
}
export default TutorialAvgGraph