import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

class LineGraph extends Component {
    /**
     * state 
     * charData = {}
     * data retrieve from LineGraphData
     */
    state = {
        chartData: {},
        data: this.props.LineGraphData
    }
    componentDidMount() {
        this.PopulateData()
    }
    /**
     * PopulateData
     */
    PopulateData = () => {
        this.setState({
            chartData: {
                labels: [...this.state.data.map((x,index) => index)],
                datasets: [
                    {
                        label: this.state.data[0].name ,
                        data: [...this.state.data.map(x => parseFloat(x.score))],
                        fill: true,
                        backgroundColor: "rgba(75,192,192,0.2)",
                        borderColor: "rgba(75,192,192,1)"
                    }
                ]
            }
        })
    }
    /**
     * LineGraph
     * @returns  LineGraph
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