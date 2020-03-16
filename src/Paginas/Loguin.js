import React, { Component } from 'react';
import './styles/login.css';
import FormLogin from '../componentes/FormLogin';
import servicio from '../servicios/servicio';
import { ToastContainer, toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';


export default class Login extends Component {
    
    state = {
        form:{
            email: "",
            password: ""
        },
        InfoUsuario: {
            role: "",
            nombre: "",
            email: ""
        },
        token: "",
        login: false
    }

    handleChange = e =>{
        console.log(this.state.form)
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async e =>{
        e.preventDefault();
        try {            
            var respuesta = await servicio.login.leer(this.state.form);
            if (respuesta.ok === false) {
                this.notifyWarn("El usuario o contraseña son incorrectos");            
                return false;
            }
            this.setState({
                ...this.state,
                InfoUsuario: respuesta.usuario,
                token: respuesta.token,
                login: true
            })

        } catch (error) {
            console.log(error);
        }
    }

    notifyWarn = e => toast.warn(e);

    render() {
        if (this.state.login) {
            return(<Redirect to={{
                pathname: "/Inicio", 
                state: { 
                    InfoUsuario: this.state.InfoUsuario,  
                    token: this.state.token, 
                    login: this.state.login
                    }
                }}></Redirect>)
        }
        else {
            return (
            
                <React.Fragment>
                    <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                        <div className="d-table-cell align-middle">
                            <div className="text-center mt-4">
                            <h1 className="h2">Welcome back, Dey</h1>
                            <p className="lead">
                                Sign in to your account to continue
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="card">
                            <FormLogin
                                onChange={this.handleChange}
                                formValues={this.state.form}
                                onSubmit={this.handleSubmit}
                            />
                        </div>
                    </div>
                    </div>
                    <ToastContainer />
                </React.Fragment>
            );
        }
        
    }
}

