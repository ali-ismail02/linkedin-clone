const Button = ({ text, onClick, color,id }) => {
    return (
      <button id={id} className="text-white w-full bg-blue-600 rounded-full text-{2rem} p-2" onClick={onClick}>
        {text}
      </button>
    );
  };
  
  Button.defaultProps = {
    text: "default",
    onClick:null,
    id:null,
  };
  
  export default Button;