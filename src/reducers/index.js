const initialState = {
    InfoUsuario: {},
    token: "",
    EstadoLogin: false,
    Categorias: [],
    Productos: {},
    CategoriaSelect: ''
}

const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case 'SET_USER':
            return{
                ...state,
                InfoUsuario: action.payload
            } 
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.payload
            }
        case 'SET_LOGIN':
            return{
                ...state,
                EstadoLogin: action.payload
            }  
        case 'GET_CATEGORIAS':
            return{
                ...state,
                Categorias: action.payload
            }
        case 'SELECT_CATEGORIA':
            return{
                ...state,
                CategoriaSelect: action.payload
            }
        case 'GET_PRODUCTS':
            return{
                ...state,
                Productos: action.payload
            }         
        default:
            return state;
    }
}

export default reducer;