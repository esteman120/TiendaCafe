import React, {useState} from 'react';
import { connect } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { CategoriaSelect } from '../actions';

const CategoriaList = ( {categorias, CategoriaSelect} ) => {
    const [state, setValues] = useState({});

    const handleChange = (event, categoria) => {
        setValues({ ...state, [event.target.name]: event.target.checked });
        CategoriaSelect(categoria._id);
    };
    return(
        <div>
            {
                categorias.map( 
                    (categoria, index) => {
                        return (<FormControlLabel key={index}
                            control={
                            <Checkbox
                                onChange={(e)=>handleChange(e, categoria)}
                                name={categoria.categoria}
                                color="primary"
                            />
                            }
                            label={categoria.categoria}
                        />)
                    }
                )
            }
        
        </div>
    );    
    
}

const mapStateToProps = (state) => {
    return{
        categorias: state.Categorias
    }
}

const mapDispatchToProps = {
    CategoriaSelect
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriaList);