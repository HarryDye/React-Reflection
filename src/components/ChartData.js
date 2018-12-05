import React, {Component} from 'react';
import axios from 'axios';
import {Line} from 'react-chartjs-2';

//to chnage the chart with the api call https://iextrading.com/developer/docs/#chart

//in the promise then. this iterates through the api data and out puts to two separate arrays, this.setstate adds them to state.
//the render method has a const with the chart data in, which formats the data to be used in the return statement

class ChartData extends Component{

  constructor(props){
    super(props);
    this.state =
    {
      labels: ["label"],
      data: [99.99]
  }
  };


  componentDidMount() {
    axios.get(`https://api.iextrading.com/1.0/stock/${this.props.prop}/chart/1m`)
      .then(response => {
        var labelArray = [];
        for(let i = 0; i < response.data.length; i++){
          labelArray.push(response.data[i].label);
        }
        this.setState({labels: labelArray});

        var dataArray = [];
        for(let i = 0; i < response.data.length; i++){
          dataArray.push(response.data[i].open);
        }
        this.setState({data: dataArray});

      })
      .catch(error =>{
        console.log('Error', error)
      });
  }

  render(){

    const graphData = {
    labels: this.state.labels,
    datasets:[{
        label:'Stock Price',
        borderColor: 'rgb(216,71,39)',
        fill: false,
        lineTension: 0.1,
        data: this.state.data
      }
    ]
  }

    return (
      <div className="chart">
      <Line
        data={graphData}
        width={450}
        height={225}
        options={{
          legend: {
            display: false
         },
          title:{
            display:true,
            text:'1 Month Stock Price',
            fontsize:10
          },
          layout:{
            padding:{
              left:75,
              right:85
            }
          }
        }}
      />
      </div>
)}}
export default ChartData;

//setState over rides the state, but this.state doesnt.
