import React, { Component } from 'react';
import './Videos.scss';
class Videos extends Component {
    render() {
        return (
            <div className="videos">
                <div className="videos-left">
                    <span className="videos-title">What is Lorem Ipsum?</span>
                    <span className="videos-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
                </div>
                <div className="videos-right">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/nUDS2fzt7sY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        )
    }
}

export default Videos;