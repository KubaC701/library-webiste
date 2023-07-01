import './Input.css';

const Input = ({ className, error, label, id, ...props }) => (
  <div className={`input ${className || ''}`}>
    {label && (
      <label className="input__label" htmlFor={id}>
        {label}
      </label>
    )}
    <input className="input__field" id={id} {...props} />
    {error && <p className="input__error">{error}</p>}
  </div>
);

export default Input;
