import './Button.css';

const Button = ({ className, variant, size, children, ...props }) => (
  <button
    type="button"
    className={`button ${variant ? `button--${variant}` : ''} ${size ? `button--${size}` : ''} ${
      className || ''
    }`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
