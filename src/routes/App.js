import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../Paginas/Loguin';
import Layout from '../componentes/Layout';
import inicio from '../Paginas/inicio';
import ventas from '../Paginas/ventas';


const App= () => {
  return (
    <BrowserRouter>
        <Switch>       
          <Route exact path="/Login" component={Login}></Route> 
          <Route exact path="/" component={Login}></Route>    
          <Layout>
              <Route exact path="/Inicio" component={inicio}></Route>
              <Route exact path="/Ventas" component={ventas}></Route>
          </Layout>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
