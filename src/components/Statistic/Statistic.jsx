import React, { Component } from 'react';
import StatisticData from './StatisticData/StatisticData';
import StatisticList from './StatisticList';
import './Statistic.scss';
class Statistic extends Component {
  render() {
    return (
      <div className="statistic">
        {StatisticData.map((item, idx)=>
          <StatisticList
          icon={item.icon}
          number={item.number}
          content={item.content}
          
          />
        )}
      </div>
    )
  }
}

export default Statistic;