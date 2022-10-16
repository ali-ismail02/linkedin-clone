import '../index.css';

const Input = ({type, placeholder, onChange, value}) => {
    return <input type={type} placeholder={placeholder} value={value} onChange={onChange} 
    className={"h-12 w-full placeholder:text-gray-400 text-2xl p-3 border-2 border-gray-500 rounded-lg "}/>
}
  
export default Input;