import '../index.css';
import { useState } from 'react';

const Input = ({classNames, type, placeholder, onChange, value}) => {
    return <input type={type} placeholder={placeholder} value={value} onChange={onChange} 
    className={"h-12 w-5/6 placeholder:text-gray-500 text-2xl p-3 border-2 border-gray-500 rounded-lg "}/>
}
  
export default Input;