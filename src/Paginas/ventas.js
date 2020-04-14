import React, { Component } from "react";
import apiAxios from "../servicios/serviciosAxios";
import { getCategorias, CategoriaSelect } from "../actions";
import { connect } from "react-redux";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import ProductList from '../componentes/ProductList';
import CategoriaList from "../componentes/CategoriaList";

class ventas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Categorias: [],
      checkedB: true,
    };
  }

  async componentWillMount() {
    let token = sessionStorage.getItem("token");
    await apiAxios.ObtenerProductos.ObtenerCategorias(token).then((res) => {
      if (!res.ok) {
        this.props.history.push("/");
      } else {
        this.esValido = res.ok;
        this.setState({
          Categorias: res.categorias,
        });
        this.props.getCategorias(res.categorias);
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Navbar expand="lg" variant="light" bg="light">
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
          </Navbar>
          <Row>
            <Col md={8}>
              <Col md={5}>
                <CategoriaList />
              </Col>
              <Col md={7}><ProductList /></Col>
            </Col>
            <Col md={4}>{/* <ShoppingCart /> */}</Col>
          </Row>
          <Row></Row>
        </Container>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  getCategorias,
  CategoriaSelect,
};

export default connect(null, mapDispatchToProps)(ventas);
