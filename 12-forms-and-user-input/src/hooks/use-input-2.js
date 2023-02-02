import { useState } from "react";

const useInput2 = (validation) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setInputIsTouched(true);
  };

  const inputIsValid = validation(enteredValue);

  const inputHasError = inputIsValid || !inputIsTouched;

  const reset = () => {
    setEnteredValue("");
    setInputIsTouched(false);
  };

  return {
    enteredValue,
    inputChangeHandler,
    inputBlurHandler,
    inputIsValid,
    inputHasError,
    reset,
  };
};

export default useInput2;
