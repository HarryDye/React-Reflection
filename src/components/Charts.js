import React, { Component } from 'react';
import axios from 'axios';
import ChartData from './ChartData';
// import ChartData from './ChartData';


class Charts extends Component {
  // let teachers = TeacherList.map((teacher) => {
  //   return (
  //     <li className="teacher" key={teacher.id} >
  //       <img className="teacher-img" src={teacher.img_src} alt="teacher" />
  //       <h3>{teacher.name}</h3>
  //       <p>{teacher.bio}</p>
  //     </li>
  //   );
  // });

    constructor(props) {
      super(props);
      this.state = {
        stats: {}
      };
    }

    componentDidMount() {
      axios.get(`https://api.iextrading.com/1.0/stock/${this.props.match.params.company}/stats`)
        .then(response => {
          this.setState({stats: response.data});
        })
        .catch(error =>{
          console.log('Error', error)
        });
    }
    render() {
      return (
        <div className="main-content">
          <ul className="group">
            <h3>Company: {this.state.stats.companyName}</h3>
            <p>week52 high: ${this.state.stats.week52high}</p>
            <p>week52 low: ${this.state.stats.week52low}</p>
            <p>Month Percent Change: {this.state.stats.month1ChangePercent}%</p>
          </ul>
          <ChartData prop={this.props.match.params.company}/>
        </div>
      );
    }
}
// <ChartData data={this.state.stats}/>


export default Charts;
