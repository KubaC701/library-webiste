import './Button.css';

const Button = ({ className, variant, children, ...props }) => (
  <button className={`button ${variant ? `button--${variant}` : ''} ${className || ''}`} {...props}>
    {children}
  </button>
);

export default Button;
