
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Menu  = props => {   
    var RolUsuario = props.InfoUsuario.role;
    
    return (
        <React.Fragment>
            <nav className="list-group">
                {RolUsuario === "ADMIN_ROLE"?
                    <div>
                        <Link className="list-group-item with-badge" to="/">
                            <i className="fa fa-user"></i>Modulo de Usuarios                  
                        </Link>
                        <Link className="list-group-item" to="/">
                            <i className="fa fa-th"></i>Categorias
                        </Link>
                        <Link className="list-group-item" to="/">
                            <i className="fa fa-list"></i>Productos
                        </Link>
                    </div>
                    : null
                } 
                <Link className="list-group-item" to="/Ventas">
                    <i className="fa fa-shopping-cart"></i>Venta
                </Link>
                <Link className="list-group-item" to="/" onClick={()=> cerrarSesion()}>
                    <i className="fa fa-sign-out"></i>Cerrar sesión
                </Link>
            </nav>
        </React.Fragment>  
    );   
}

const cerrarSesion = () => {
    sessionStorage.removeItem("token");
}

const mapStateToProps = state => {
    return{
        InfoUsuario: state.InfoUsuario,               
    }
}

export default connect(mapStateToProps, null)(Menu);