import './Select.css';

const Select = ({ options, className, ...props }) => {
  return (
    <select className={`select ${className || ''}`} {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value} className="manage-books__option">
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
