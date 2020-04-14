import React, { Component } from "react";
import apiAxios from "../servicios/serviciosAxios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {setUser} from '../actions';
import "./styles/inicio.css";
const logo = require("../assets/images/user-logo.png");
const Categoria = require("../assets/images/Categorias.png");
const Productos = require("../assets/images/Productos.png");
const Ventas = require("../assets/images/Ventas.png");

class inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoUsuario: {},
      esUsuarioValido: false,
    };
    this.esValido = false;
  }

  async componentWillMount() {
     
    let token = sessionStorage.getItem("token");
    await apiAxios.ValidarUsuario.Validar(token).then((res) => {
      if (!res.ok) {
        this.props.history.push("/");
      } else {
        this.esValido = res.ok
        this.setState({
          infoUsuario: res.usuario,
          esUsuarioValido: res.ok,
        });
        this.props.setUser(res.usuario)
      }
    });
  }

  render() {

    if (this.state.esUsuarioValido) {
      if (this.state.infoUsuario.role === "ADMIN_ROLE") {
        return (
          <React.Fragment>
            <div className="container paddingContainer">
              <div className="row mt-30">
                <div className="col-md-6 col-xl-6">
                  <Link to="/">
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title pt-1">Modulo de Usuarios</h3>
                        <div className="">
                          <img className="ImgUsuario" src={logo} alt="" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-xl-6">
                  <Link to="">
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title pt-1">
                          Modulo de Categorias
                        </h3>
                        <div className="">
                          <img className="ImgUsuario" src={Categoria} alt="" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="row mt-30">
                <div className="col-md-6 col-xl-6">
                  <Link to="">
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title pt-1">Modulo de Productos</h3>
                        <div className="">
                          <img className="ImgUsuario" src={Productos} alt="" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-xl-6">
                  <Link to="">
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title pt-1">Modulo de Ventas</h3>
                        <div className="">
                          <img className="ImgUsuario" src={Ventas} alt="" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      }
      else {
        return (
          <React.Fragment>
            <div className="container paddingContainer">
              <div className="row mt-30">
                <div className="col-md-6 col-xl-6">
                  <Link to="/Ventas">
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title pt-1">Modulo de Ventas</h3>
                        <div className="">
                          <img className="ImgUsuario" src={Ventas} alt="" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      }
    }
    else {
      return (
        null
      )
    }
  }
}

const mapDispatchToProps = {
  setUser
}

// function mapDispatchToProps(dispatch) {
//   return {
//     setUser: infoUsuario => dispatch(setUser(infoUsuario))
//   };
// }

export default connect(null, mapDispatchToProps)(inicio);
