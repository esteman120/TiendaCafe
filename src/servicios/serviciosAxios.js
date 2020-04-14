import api from "./config";

function configApi(token = "") {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      token,
    },
  };
  return config;
}

const apiAxios = {
  login:  {
    async leer(objUsuario) {
        let respuesta;
      var config = configApi();
      await api
        .post("/login", objUsuario, config)
        .then((res) => {
            respuesta = res.data;
          console.log(res);
        })
        .catch((err) => {
            respuesta = err;
          console.log(err);          
        });

        return respuesta;
    }    
  },
  ValidarUsuario: {
    async Validar(token) {
        let respuesta;
    //   var config = configApi(token);
        api.defaults.headers.post['token'] = token;
      await api.post("/ValidarUsuario").then(
        (res)=>{
            respuesta = res.data;
        }
      ).catch(
          (err)=>{
            respuesta = JSON.parse(err.request.response);
            console.log(err);
          }
      );
      return respuesta;
    },
  },
  ObtenerProductos: {
    async ObtenerProductos(token, idCategoria){
      let respuesta;
      api.defaults.headers.get['token'] = token;
      await api.get("/productos/categoria/"+idCategoria).then(
        (res)=>{
          respuesta = res.data;
        }
      ).catch(
        (err)=>{
            respuesta = JSON.parse(err.request.response);
            console.log(err);
        }
      );
      return respuesta;
    },
    async ObtenerCategorias(token){
      let respuesta;
      api.defaults.headers.get['token'] = token;
      await api.get("/categoria").then(
        (res)=>{
          respuesta = res.data;
        }
      ).catch(
        (err)=>{
            respuesta = JSON.parse(err.request.response);
            console.log(err);
        }
      );
      return respuesta;
    }
  }
};

export default apiAxios;
