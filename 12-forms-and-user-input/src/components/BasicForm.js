import useInput from "../hooks/use-input";
// import useInput2 from "../hooks/use-input-2";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  // const {
  //   enteredValue: firstName,
  //   inputChangeHandler: firstNameChangeHandler,
  //   inputBlurHandler: firstNameBlurHandler,
  //   inputIsValid: firstNameIsValid,
  //   inputHasError: firstNameHasError,
  //   reset: resetFirstName,
  // } = useInput2((value) => value.trim() !== "");

  // const {
  //   enteredValue: lastName,
  //   inputChangeHandler: lastNameChangeHandler,
  //   inputBlurHandler: lastNameBlurHandler,
  //   inputIsValid: lastNameIsValid,
  //   inputHasError: lastNameHasError,
  //   reset: resetLastName,
  // } = useInput2((value) => value.trim() !== "");

  // const {
  //   enteredValue: emailInput,
  //   inputChangeHandler: emailChangeHandler,
  //   inputBlurHandler: emailBlurHandler,
  //   inputIsValid: emailIsValid,
  //   inputHasError: emailHasError,
  //   reset: resetEmail,
  // } = useInput2((value) => value.includes("@"));

  const firstNameClasses = !firstNameHasError
    ? "form-control"
    : "form-control invalid";

  const lastNameClasses = !lastNameHasError
    ? "form-control"
    : "form-control invalid";

  const emailClasses = !emailHasError ? "form-control" : "form-control invalid";

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(firstNameValue);
    console.log(lastNameValue);
    console.log(emailValue);

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">Please enter a first name.</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Please enter a first name.</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">Please enter a valid email address.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
