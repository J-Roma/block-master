import { useState } from 'react';

export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = (newStateForm = initialState ) => {
        setValues( newStateForm );
    }
    
    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [ target.name ]: target.value,
            [ target.lastname ]: target.value
        });
    }

    return [ values, handleInputChange, reset ];
}