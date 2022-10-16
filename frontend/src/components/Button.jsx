const Button = ({ text, onClick, color }) => {
    return (
      <button className="text-white w-full bg-blue-600 rounded-full text-{2rem} p-2" onClick={onClick}>
        {text}
      </button>
    );
  };
  
  Button.defaultProps = {
    text: "default",
  };
  
  export default Button;