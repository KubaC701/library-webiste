import './Input.css';

const Input = ({ className, error, ...props }) => {
  return (
    <div className="input">
      <input className={`input__field ${className || ''}`} {...props} />
      {error && <p className="input__error">{error}</p>}
    </div>
  );
};

export default Input;
