export const setUser = payload => ({
    type: 'SET_USER',
    payload,
});

export const setToken = payload => ({
    type: 'SET_TOKEN',
    payload,
});

export const setLogin = payload => ({
    type: 'SET_LOGIN',
    payload,
});

export const getToken = payload => ({
    type: 'GET_TOKEN',
    payload,
});

export const getCategorias = payload => ({
    type: 'GET_CATEGORIAS',
    payload,
});

export const CategoriaSelect = payload => ({
    type: 'SELECT_CATEGORIA',
    payload,
});

export const getProducts = payload => ({
    type: 'GET_PRODUCTS',
    payload,
});