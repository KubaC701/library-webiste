import { useState } from 'react';
import Modal from '../Modal/Modal';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { ROLES } from '../../constants/users';
import Select from '../Select/Select';

const AddUserModal = ({ onSubmit, setIsModalOpen }) => {
  const [role, setRole] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [repeatPasswordError, setRepeatPasswordError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { email, password, repeatPassword } = Object.fromEntries(formData.entries());

    let isValid = true;

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    }
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }

    if (!repeatPassword) {
      setRepeatPasswordError('Repeat password is required');
      isValid = false;
    }
    if (password !== repeatPassword) {
      setRepeatPasswordError('Passwords do not match');
      isValid = false;
    }

    if (!isValid) return;

    onSubmit({ email, password, role });
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
            label="Email"
            className="add-user-modal__input add-user-modal__input--email"
            type="text"
            error={emailError}
            autoFocus
            name="email"
            id="email"
            onChange={() => setEmailError('')}
          />
          <Select
            options={options}
            value={role}
            onChange={(event) => setRole(event.target.value)}
          />
        </div>
        <Input
          label="Password"
          className="add-user-modal__input"
          type="password"
          error={passwordError}
          name="password"
          id="password"
          onChange={() => setPasswordError('')}
        />
        <Input
          label="Repeat password"
          className="add-user-modal__input"
          type="password"
          error={repeatPasswordError}
          name="repeatPassword"
          id="repeatPassword"
          onChange={() => setRepeatPasswordError('')}
        />
        <div className="add-user-modal__actions">
          <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
            Cancel
          </Button>
          <Button type="submit">Add user</Button>
        </div>
      </form>
    </Modal>
  );
};

export default AddUserModal;
