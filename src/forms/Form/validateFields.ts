import { FieldState } from './types';

const validateFields = (fieldState: FieldState): FieldState => {
  const withValidations = { ...fieldState };

  Object.entries(fieldState).forEach(([fieldName, entry]) => {
    const {
      value: fieldValue,
      validation,
    } = entry;

    if (typeof validation === 'function') {
      const {
        isValid,
        message,
      } = validation(fieldValue);

      withValidations[fieldName] = {
        ...withValidations[fieldName],
        isValid,
        validationMessage: message,
      };
    }
  });

  return withValidations;
};

export default validateFields;
