import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import apiAxios from "../servicios/serviciosAxios";
import { Button } from 'react-bootstrap';

const styles = {
    products: {
      display: 'flex',
      alignItems: 'stretch',
      flexWrap: 'wrap'
    },
    product: {
      width: '220px',
      marginLeft: 10,
      marginRight: 10
    }
  };  

  async function ObtenerProductos(token, CategoriaSelect) {
    let products = [];
    if (CategoriaSelect !== "") {
      await apiAxios.ObtenerProductos.ObtenerProductos(token, CategoriaSelect).then(
      (res)=>{
        products = res.productos;         
      })
      .catch(
        (err)=>{
          console.log(err); 
        }      
      )
    }

    return products;
  }

const ProductList = async ( {CategoriaSelect} ) => {
  const [state, setState] = useState([]);
    let token = sessionStorage.getItem("token");
    let products = [];
    useEffect(() => {
      products = ObtenerProductos(token, CategoriaSelect).then(
        (res)=>{
           console.log(products);
          setState({productos: products});
        }
      );
     
    }, []);
    
    
    return (
      <div style={styles.products}>
      {/* {state.productos.map(product =>
        <div className="thumbnail" style={styles.product} key={product.id}>
          <img src={product.image} alt={product.name} />
          <div className="caption">
            <h4>{product.name}</h4>
            <p>
            <Button bsStyle="primary" disabled={product.disponible} role="button">${product.precioUni}</Button>              
            </p>
          </div>
        </div>
      )} */}
    </div>
  )        
}

const mapStateToProps = (state) => {
  return{
    CategoriaSelect: state.CategoriaSelect
  }
}

export default connect(mapStateToProps, null)(ProductList);
