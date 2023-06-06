import './Hamburger.css';

const Hamburger = ({ isActive, setIsActive }) => {
  return (
    <button
      type="button"
      className={`hamburger ${isActive ? 'hamburger--active' : ''}`}
      onClick={() => setIsActive(!isActive)}
    >
      <span className="hamburger__box" id="menu">
        <span className="hamburger__line" />
      </span>
    </button>
  );
};

export default Hamburger;
