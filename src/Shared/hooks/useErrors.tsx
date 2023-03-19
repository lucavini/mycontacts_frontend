import React from 'react';

function useErrors<Fields>() {
  interface Errors {
    field: Fields;
    message: string;
  }

  const [errors, setErrors] = React.useState<Errors[]>([]);

  function setError({ field, message }: Errors) {
    const errorAlreadyExists = errors.find((error) => error.field === field);
    if (errorAlreadyExists) {
      return;
    }

    setErrors((prevState) => [...prevState, { field, message }]);
  }

  function removeError(fieldName: Fields) {
    setErrors((prevState) =>
      prevState.filter((error) => error.field !== fieldName),
    );
  }

  function gerErrorMessageByFieldName(fieldName: Fields) {
    return errors.find((error) => error.field === fieldName)?.message;
  }

  return { errors, setError, removeError, gerErrorMessageByFieldName };
}

export default useErrors;
