import './Input.css';

const Input = ({ className, error, ...props }) => (
  <div className={`input ${className || ''}`}>
    <input className="input__field" {...props} />
    {error && <p className="input__error">{error}</p>}
  </div>
);

export default Input;
