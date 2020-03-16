import React from 'react';
import InfoEmpleado from './InfoEmpleado';
import Menu from './Menu';
import './styles/Layout.css';

function Layout(props){
    return (
      <React.Fragment>        
        <div className="container padding-bottom-3x mb-2">
          <div className="row">
            <div className="col-lg-4">
                <InfoEmpleado></InfoEmpleado>
                <Menu></Menu>
            </div>
            <div className="col-lg-8">
               {props.children}
            </div>           
          </div>
        </div>
      </React.Fragment>
    );
}

export default Layout;