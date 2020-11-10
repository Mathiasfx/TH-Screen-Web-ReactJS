import React from 'react';
import Input from './Input';
import {useForm} from 'react-hook-form';

function Formulario() {
    const {register,errors,handleSubmit} = useForm();
    const onSubmit = (data,e) => {console.log(data); e.target.reset();}
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}> 
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
                    label='Nombre y Apellido'
                />

            </form>        
        </div>
    );
}

export default Formulario
