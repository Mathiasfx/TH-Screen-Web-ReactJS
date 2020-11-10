import React from 'react'


const Input = ({type,name,ref,placeholder,error,label}) => {
    return (
        <div>
            <label>{label}</label>
            <input
            type={type}
            name={name}           
            ref={ref}
            placeholder={placeholder}
            />
           <p className='error'>{error}</p> 
            
        </div>
    )
}

export default Input
