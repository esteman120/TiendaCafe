import React, { Component } from 'react';
import './styles/Layout.css';
import { Link } from 'react-router-dom';

var styleImag = {backgroundImage: 'url(https://bootdey.com/img/Content/bg1.jpg)'}

class InfoEmpleado extends Component {
    
    render() {
        return (
            <React.Fragment>
            <div className="user-info-wrapper">
                <div
                  className="user-cover"
                  style={styleImag}
                >
                  <div
                    className="info-label"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="You currently have 290 Reward Points to spend"
                  >
                    <i className="icon-medal"></i>290 points
                  </div>
                </div>
                <div className="user-info">
                  <div className="user-avatar">
                  <Link className="edit-avatar" to="/"></Link>                    
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      alt="User"
                    />
                  </div>
                  <div className="user-data">
                    <h4>Daniel Adams</h4>
                    <span>Joined February 06, 2017</span>
                  </div>
                </div>
              </div>
            </React.Fragment>
        );
    }
}

export default InfoEmpleado;