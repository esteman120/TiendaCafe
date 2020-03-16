
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="list-group">
                    <Link className="list-group-item with-badge" to="/">
                        <i className="fa fa-th"></i>Orders                  
                    </Link>
                    <Link className="list-group-item" to="/">
                        <i className="fa fa-user"></i>Profile
                    </Link>   
                    <Link className="list-group-item" to="/">
                        <i className="fa fa-map"></i>Addresses
                    </Link>
                    <Link className="list-group-item" to="/">
                        <i className="fa fa-heart"></i>Wishlist
                    </Link>  
                    <Link className="list-group-item" to="/">
                        <i className="fa fa-tag"></i>My Tickets
                    </Link> 
                </nav>
            </React.Fragment>  
        );
    }
}

export default Menu;