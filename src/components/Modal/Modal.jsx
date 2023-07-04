import './Modal.css';

const Modal = ({ children, setIsModalOpen }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        {children}
        <button className="modal__close" onClick={() => setIsModalOpen(false)}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
