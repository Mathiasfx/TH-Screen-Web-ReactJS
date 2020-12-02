import React from 'react';
import Input from './Input';
import {useForm} from 'react-hook-form';
import './Formulario.css';

function Formulario() {
    const {register,errors,handleSubmit} = useForm();
    const onSubmit = (data,e) => {console.log(data); e.target.reset();}
    return (
        <div className='form_container'> 
        <div className='form'>
            <form className='register-form' onSubmit={handleSubmit(onSubmit)}> 
                <Input
                    type='text'
                    name='Nombre'
                    placeholder='Ingrese su Nombre'
                     //Validar Campo
                    ref={register({
                    required:{value: true,
                    message:'El Campo Nombre es Obligatorio',
                    },
                    minLength: {
                        value: 3,
                        message: 'El nombre es muy Corto' 
                    }})}
                    error={errors?.nombre?.message}
                    label='Nombre'
                />
                 <Input
                    type='text'
                    name='Telefono'
                    placeholder='Ingrese un Telefono'
                     //Validar Campo
                    ref={register({
                    required:{value: true,
                    message:'El Campo Nombre es Obligatorio',
                    },
                    minLength: {
                        value: 5,
                        message: 'Ingrese un Numero valido' 
                    }})}
                    error={errors?.nombre?.message}
                    label='Telefono'
                />
                 <Input
                    type='text'
                    name='Mail'
                    placeholder='Mensaje'
                     //Validar Campo
                    ref={register({
                    required:{value: true,
                    message:'El Campo es Obligatorio',
                    },
                    minLength: {
                        value: 5,
                        message: 'Ingrese un mensaje mas largo' 
                    }})}
                    error={errors?.nombre?.message}
                    label='Mensaje'
                />               

                <button>Enviar</button>

            </form>     
            </div>   
        </div>
    );
}

export default Formulario
