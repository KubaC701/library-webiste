import { useRef, useState } from 'react';
import Modal from '../Modal/Modal';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { ROLES } from '../../constants/users';
import Select from '../Select/Select';

const AddUserModal = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [emailError, setEmailError] = useState('');
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      setEmailError('Email is required');
      return;
    }
    onSubmit({ email, role });
  };

  const options = Object.values(ROLES).map((role) => ({
    value: role,
    label: role[0].toUpperCase() + role.slice(1),
  }));

  return (
    <Modal>
      <form className="add-user-modal__form" onSubmit={handleSubmit}>
        <div className="add-user-modal__fields">
          <Input
            ref={inputRef}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            label="Email"
            className="add-user-modal__input"
            type="text"
            error={emailError}
            autoFocus
          />
          <Select
            options={options}
            value={role}
            onChange={(event) => setRole(event.target.value)}
          />
        </div>
        <Button type="submit">Add user</Button>
      </form>
    </Modal>
  );
};

export default AddUserModal;
