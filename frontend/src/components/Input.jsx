import '../index.css';

const Input = ({type, placeholder, onChange, value, id,min,max}) => {
    return <input id={id} min={min} max={max} type={type} placeholder={placeholder} value={value} onChange={onChange} 
    className={"h-12 w-full placeholder:text-gray-400 text-xl p-3 border-2 border-gray-500 rounded-lg "}/>
}
Input.defaultProps = {
    id: null,
    min:null,
    max:null
  };
  
export default Input;