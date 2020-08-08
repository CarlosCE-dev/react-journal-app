import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import validator from 'validator';

import { useForm } from '../../hooks/useForm';
import { setError, removeError } from '../../actions/ui';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector( state => state.ui );

    const [ formValues, handleInputChange ] = useForm({
        name: 'Carlos',
        email: 'nado@gmail.com',
        password: '1234',
        password2: '1234'
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if ( isFormValid() ){
            dispatch( removeError() );
        }
    }

    const isFormValid = () => {
        if ( name.trim().length === 0 ){
            dispatch( setError("El nombre es requerido.") );
            return false;
        } else if ( !validator.isEmail( email ) ) {
            dispatch( setError("El email no es valido.") );
            return false;
        } else if (password.length < 5 ) {
            dispatch( setError("La contraseña debe ser mayor a 5.") );
            return false;
        } else if (  password !== password2 ){
            dispatch( setError("Porfavor verificar si las dos contraseñas son iguales") );
            return false;
        }
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={ handleRegister }>

                {
                    msgError &&
                    <div className="auth__alert-error">
                        { msgError }
                    </div>
                }

                <input
                    className="auth__input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />

                <input
                    className="auth__input"
                    type="text"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={ password }
                    onChange={ handleInputChange }
                />

                <input
                    className="auth__input"
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    value={ password2 }
                    onChange={ handleInputChange }
                />

                <button className="btn btn-primary btn-block mb-5" type="submit">
                    Register
                </button>

                <Link to="/auth/login" className="link">
                    Already registerd?
                </Link>

            </form>
        </>
    )
}
