import './Input.css';

const Input = ({ className, id, label, ...props }) => {
  return (
    <>
      {' '}
      {label && (
        <label className="input__label" htmlFor={id}>
          {' '}
          {label}{' '}
        </label>
      )}{' '}
      <input className={`input ${className || ''}`} id={id} {...props} />{' '}
    </>
  );
};

export default Input;
