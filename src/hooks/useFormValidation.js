import { useState } from 'react';

const useFormValidation = (values, valdations) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let isValid = true;

    Object.entries(values).forEach(async ([key, value]) => {
      const validation = valdations?.[key];

      if (!value) {
        setErrors((prevErrors) => ({ ...prevErrors, [key]: `The ${key} field is required` }));
        isValid = false;
      }
      if (validation) {
        const isValidField = await validation.validate(value);
        if (!isValidField) {
          setErrors((prevErrors) => ({ ...prevErrors, [key]: validation.message }));
          isValid = false;
        }
      }
      if (isValid) setErrors((prevErrors) => ({ ...prevErrors, [key]: '' }));
    });

    return isValid;
  };

  const clearError = (key) => {
    setErrors((prevErrors) => ({ ...prevErrors, [key]: '' }));
  };

  return { errors, validate, clearError };
};

export default useFormValidation;
