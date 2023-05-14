'use client';
import React from 'react'
import clsx from 'clsx';
import {FieldErrors,FieldValues,UseFormRegister} from 'react-hook-form';

interface InputProps {
  label:string;
  id:string;
  type?:string;
  required?:boolean;
  register:UseFormRegister<FieldValues>;
  errors:FieldErrors;
  disabled?:boolean;
}
const Input:React.FC<InputProps> = ({
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-400">{label}</label>
      <div className='mt-1'>
        <input 
        id={id}
        type={type}
        autoComplete={id}
        disabled={disabled}
        {...register(id,{required})}
        className={clsx(`
          form-input mt-1 focus:ring-yellow-400 focus:border-yellow-400 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md`,
          errors[id] && 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500',
          disabled && "opacity-50 cursor-default"
        )}
         />
      </div>
    </div>
  )
}

export default Input