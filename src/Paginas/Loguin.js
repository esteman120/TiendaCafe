import React, { useState } from "react";
import { connect } from "react-redux";
import "./styles/login.css";
import FormLogin from "../componentes/FormLogin";
// import servicio from "../servicios/servicio";
import { ToastContainer, toast } from "react-toastify";
import {setUser, setToken, setLogin} from '../actions';
import apiAxios from "../servicios/serviciosAxios";

const Login = props => {
 
  const [state, setValue] = useState({
    email: ''
  });

  const handleChange = e => {
    setValue({
      form: {
        ...state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      var respuesta = await apiAxios.login.leer(state.form);
      // var respuesta = await servicio.login.leer(state.form);
      if (respuesta.ok === false) {
        notifyWarn("El usuario o contraseña son incorrectos");        
        return false;
      }
      // props.setUser(respuesta.usuario);
      // props.setToken(respuesta.token);
      // props.setLogin(true);
      sessionStorage.setItem("token", respuesta.token);
      props.history.push("/Inicio");
    } catch (error) {
      console.log(error);
    }
  };

  const notifyWarn = e => toast.warn(e);

  return (
    <React.Fragment>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <div className="text-center mt-4">
                <h1 className="h2">Welcome back, Dey</h1>
                <p className="lead">Sign in to your account to continue</p>
              </div>
            </div>
          </div>
          <div className="card">
            <FormLogin
              onChange={handleChange}
              formValues={state.form}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};


const mapDispatchToProps = {
    setUser,
    setToken,
    setLogin
  }

export default connect(null, mapDispatchToProps)(Login);
