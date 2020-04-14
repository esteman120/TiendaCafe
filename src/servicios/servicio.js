const BASE_URL = 'http://localhost:3000';

async function callApi(endpoint, options = {}, token) {
      
    options.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      token
    };
  
    const url = BASE_URL + endpoint;
    const response = await fetch(url, options);
    const data = await response.json();
  
    return data;
}

const api = {
    login: {
        leer(objUsuario) {
            return callApi("/login", {
                method: 'POST',
                body: JSON.stringify(objUsuario),
            });
        }
    },
    ValidarUsuario: {
        Validar(token) {
            return callApi(
                "/ValidarUsuario",
                {
                    method: 'POST',
                },
                token
            )
        }
    }
}

export default api;
