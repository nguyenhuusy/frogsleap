import React, { Component } from 'react';


class StatisticList extends Component {
  render() {
    const {icon, number, content} = this.props;
    return (
      <div className="statistic-item">
           <i className={icon}></i>
          
          <div className="statistic-item-content">
            <span className="statistic-item-content-number">{number}</span>
            <span className="statistic-item-content-text">{content}</span>
          </div>
      </div>
    )
  }
}

export default StatisticList;