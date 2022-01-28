import React, { Component } from 'react'
import UserService from '../services/UserService'
//import { Chart as ChartJS } from 'chart.js/auto'
import {Bar, Doughnut} from 'react-chartjs-2'

class ChartComponent extends Component {
    constructor(props) {
        super(props)
        this.state  = {
            chartData : {},
            pieData : {}
        }
    }

    componentDidMount(){

        UserService.graphOne('Bar').then((res) => {
            this.setState({chartData : res.data});
        });

        UserService.graphOne('Pie').then((res) =>{
            this.setState({pieData : res.data});

        });
        
    }

    render() {
        const labels1 = Object.keys( this.state.chartData)
        const values1 = Object.values(this.state.chartData)
        const barData = {
            labels: labels1,
            datasets: [
                {
                    label: 'Avg Calorie Content',
                    backgroundColor: ['rgba(0,10,220,0.5)','rgba(0,10,220,0.5)','rgba(0,10,220,0.5)','rgba(0,10,220,0.5)' ,'rgba(0,10,220,0.5)','rgba(0,10,220,0.5)'],
                    //backgroundColor: ['rgba(35,192,192,1)'],
                    borderColor: ['rgba(0,0,0,1)','rgba(0,0,0,1)','rgba(0,0,0,1)','rgba(0,0,0,1)','rgba(0,0,0,1)','rgba(0,0,0,1)'],
                    borderWidth: 2,
                    data: values1
                }
            ]
        }
        const labels2 = Object.keys(this.state.pieData)
        const values2 = Object.values(this.state.pieData)
        const pieChart = {
            labels : labels2,
            datasets: [
                {
                    label: 'Caffeine Content',
                    backgroundColor: [
                        'rgba(232,99,132,1)',
                        'rgba(232,211,6,1)',
                        'rgba(54,162,235,1)',
                        'rgba(255,159,64,1)',
                        'rgba(153,102,255,1)',
                        '#FFC0CB'
                    ],  
                    //   hoverBackgroundColor: [
                    //   '#501800',
                    //   '#4B5000',
                    //   '#175000',
                    //   '#003350',
                    //   '#35014F',
                    //   '#742a40'
                    //   ],
                      pointBackgroundColor: 'rgba(255,206,86,0.2)',
                      data : values2
                }
            ]
        }
        return (
                <div>
                    <br></br>
            <div>
                <Bar
                 data={barData}
                    options={{
                       
                            title:{
                                display:true,
                                text:'Average Calorie Content in drinks',
                                fontSize:20
                            },
                                legend:{
                                display:true,
                                position:'top'
                            }
                        
                    }}
                />
            </div>
                <br></br>
            <div>
                <br></br>
                <Doughnut
                    data={pieChart}

                    options={{
                            title:{
                                display:true,
                                text:"Maximum Caffeine content per drink",
                                fontSize:20
                            },
                                legend:{
                                display: true,
                                position:'right'
                            }
                        
                }}
                />
            </div>
            </div>
            );
           
        }
    }
    
    export default ChartComponent