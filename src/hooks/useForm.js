// write your custom hook here to control your checkout form
import { useState } from 'react';

import useLocalStorage from './useLocalStorage';

const useForm = (initialFromValues) => {
    const [values, setValues] = useLocalStorage('form-values', initialFromValues);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
    };

    return[values, showSuccessMessage, handleChanges, handleSubmit];
}

export default useForm;