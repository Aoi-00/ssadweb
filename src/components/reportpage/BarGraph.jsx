import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'


class BarGraph extends Component {
    /**
     * 
     */
    state = {
        chartData: {},
        data: this.props.GraphData
    }
    componentDidMount() {
        this.PopulateData()
    }
    /**
     * 
     * @param {*} e 
     * @param {*} elem 
     */
    ViewStudent = (e, elem) => {
        if (elem.length > 0) {
            var ind = elem[0]._index
            this.props.viewStudent(this.state.data[ind].studid)
        }

    }

    /**
     * 
     */
    PopulateData = () => {
        this.setState({
            chartData: {
                labels: [...this.state.data.map(x => x.name)],
                datasets: [{
                    label: 'Score',
                    data: [...this.state.data.map(x => x.score)],
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
     * 
     * @returns 
     */
    render() {
        const options = {
            onClick: (e, elem) => this.ViewStudent(e, elem),
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Student Name'
                    },
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: "Student's Score"
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
export default BarGraph