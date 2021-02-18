type Field = {
  isValid: boolean
}

type Fields = Field[];

// NOTE: when using this function, is could return 'undefined' so compare its return value to false and true directly (i.e. isFormValid(fieldState) === false)
export default (fieldState: Fields): boolean => {
  let formIsValid;
  if (fieldState) {
    const invalidFields = Object.entries(fieldState).filter(([, { isValid }]) => isValid === false);
    const hasValidationErrors = invalidFields && invalidFields.length > 0;
    formIsValid = !hasValidationErrors;
  }
  return formIsValid;
};
