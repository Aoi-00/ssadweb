import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

class LineGraph extends Component {
    /**
     * 
     */
    state = {
        chartData: {},
        data: this.props.LineGraphData
    }
    componentDidMount() {
        this.PopulateData()
    }
    /**
     * 
     */
    PopulateData = () => {
        this.setState({
            chartData: {
                labels: [0,...this.state.data.map((x,index) => index + 1)],
                datasets: [
                    {
                        label: this.state.data[0].name ,
                        data: [0,...this.state.data.map(x => parseFloat(x.score))],
                        fill: true,
                        backgroundColor: "rgba(75,192,192,0.2)",
                        borderColor: "rgba(75,192,192,1)"
                    }
                ]
            }
        })
    }
    /**
     * 
     * @returns 
     */
    render() {
        const options = {
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                      display: true,
                      labelString: 'Number of Tries'
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
                <Line data={this.state.chartData} options={options}/>
            </div>
        )
    }
}
export default LineGraph