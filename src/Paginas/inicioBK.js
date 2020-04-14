import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
// import servicio from "../servicios/servicio";
import "./styles/inicio.css";
import apiAxios from "../servicios/serviciosAxios";
const logo = require("../assets/images/user-logo.png");
const Categoria = require("../assets/images/Categorias.png");
const Productos = require("../assets/images/Productos.png");
const Ventas = require("../assets/images/Ventas.png");

// const validarUsuario = async (token) =>{
//   var respuesta = await servicio.ValidarUsuario.Validar(token);
//   return respuesta;
// }


const Inicio = (props)  => {
  // let token = sessionStorage.getItem("token");
  // const respuesta = await apiAxios.ValidarUsuario.Validar(token);
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    setUsers({ok: true, prueba: "sdfsdfsdfsdf sdfs f"});
    
  }, [])
  console.log(users);
  // apiAxios.ValidarUsuario.Validar(token).then(
  //   (res)=>{
  //     setUsers(res);
  //   }
  // );
  // const validarUsuario = (token) => {   
  //   // 
  //   .then(
  //     (res)=>{
  //       setUsers(res);
  //     }
  //   );
  // };

  // useEffect( () => {
  //   let token = sessionStorage.getItem("token");
  //   validarUsuario(token)
    
  // });

  const hasState = Object.keys(users).length > 0;

  return hasState ? (
    <React.Fragment>
      <div className="container paddingContainer">
        <div className="row mt-30">
          <div className="col-md-6 col-xl-6">
            <Link to="">
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
                  <h3 className="card-title pt-1">Modulo de Categorias</h3>
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
  ) : (
    <Redirect to="/" />
  );
};

// const mapStateToProps = state => {
//     return{
//         token: state.token,
//         EstadoLogin: state.EstadoLogin
//     }
// }

export default connect(null, null)(Inicio);

// const [state, setstate] = useState({});
// // const hasState = Object.keys(state).length > 0;
// // var state = {
// //   InfoUsuario: []
// // }
// useEffect(() => {
//   let token = sessionStorage.getItem("token");
//   const validarUsuario = async (token) =>{
//     var respuesta = await servicio.ValidarUsuario.Validar(token);
//     if (respuesta.ok) {
//       setstate(respuesta.usuario)

//     }

//   }
//   if (token !== null) {
//     validarUsuario(token);
//   }

// }, []);



/*

  render() {
    if (this.esValido) {
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
      } else {
        return(
          <React.Fragment>
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
          </React.Fragment>
        )
        
      }
    } else {
      return <Redirect to="/"></Redirect>;
    }
  }

*/
