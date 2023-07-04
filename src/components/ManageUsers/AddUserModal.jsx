import { useState } from 'react';
import Modal from '../Modal/Modal';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { ROLES } from '../../constants/users';
import Select from '../Select/Select';
import useFormValidation from '../../hooks/useFormValidation';

const AddUserModal = ({ onSubmit, setIsModalOpen }) => {
  const [role, setRole] = useState(ROLES.USER);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const { errors, validate, clearError } = useFormValidation(
    {
      email,
      password,
      'repeat password': repeatPassword,
    },
    {
      'repeat password': {
        validate: (value) => value === password,
        message: 'Passwords do not match',
      },
    }
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate();

    if (!isValid) return;

    onSubmit({ email, password, role });
  };

  const options = Object.values(ROLES).map((role) => ({
    value: role,
    label: role[0].toUpperCase() + role.slice(1),
  }));

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <form className="add-user-modal__form" onSubmit={handleSubmit}>
        <div className="add-user-modal__fields">
          <Input
            label="Email"
            className="add-user-modal__input add-user-modal__input--email"
            type="text"
            error={errors.email}
            autoFocus
            name="email"
            id="email"
            onChange={(event) => {
              clearError('email');
              setEmail(event.target.value);
            }}
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
          error={errors.password}
          name="password"
          id="password"
          onChange={(event) => {
            clearError('password');
            setPassword(event.target.value);
          }}
        />
        <Input
          label="Repeat password"
          className="add-user-modal__input"
          type="password"
          error={errors['repeat password']}
          name="repeatPassword"
          id="repeatPassword"
          onChange={(event) => {
            clearError('repeat password');
            setRepeatPassword(event.target.value);
          }}
        />
        <div className="add-user-modal__actions">
          <Button
            className="add-user-modal__button "
            type="button"
            variant="outline"
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </Button>
          <Button type="submit" className="add-user-modal__button">
            Add user
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default AddUserModal;
