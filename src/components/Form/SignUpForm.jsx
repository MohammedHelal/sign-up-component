//import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import "./FormStyles.css";

function SignUpForm() {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  function inputChangeHandler(event) {
    let id = event.target.id;

    setFormDetails({ ...formDetails, [`${id}`]: event.target.value });

    setErrors({
      ...errors,
      [`${id}Error`]: "",
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (
      formDetails.firstName === "" ||
      formDetails.lastName === "" ||
      !regex.test(formDetails.email) ||
      formDetails.password === "" ||
      formDetails.password.length < 8
    ) {
      setErrors({
        ...errors,
        firstNameError:
          formDetails.firstName === "" ? "First Name cannot be empty" : "",
        lastNameError:
          formDetails.lastName === "" ? "Last Name cannot be empty" : "",
        emailError: !regex.test(formDetails.email)
          ? "Looks like this is not an email"
          : "",
        passwordError:
          formDetails.password === ""
            ? "Password cannot be empty"
            : formDetails.password.length < 8
            ? "password can't be less than 8 characters"
            : "",
      });
      return;
    }

    setIsSubmitted(true);
    console.log(formDetails);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormDetails({
        ...formDetails,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
    }, 5000);
  }

  return (
    <form onSubmit={submitHandler}>
      {isSubmitted && (
        <p className="success">
          Thank you for registering you will recieve an email shortly with the
          next steps
        </p>
      )}
      {inputDetails.map((ele) => (
        <Input
          key={ele.id}
          id={ele.id}
          type={ele.type}
          placeholder={ele.placeholder}
          formDetails={formDetails}
          onChange={inputChangeHandler}
          errors={errors}
        />
      ))}
      <button className="submit" type="submit">
        CLAIM YOUR FREE TRIAL
      </button>
      <p className="terms">
        By clicking the button, you are agreeing to our{" "}
        <span>Terms and Services</span>
      </p>
    </form>
  );
}

function Input({ id, type, placeholder, formDetails, onChange, errors }) {
  let isError = errors[`${id}Error`] !== "";
  let inputClasses = isError ? "input-error" : "input";
  return (
    <div className="input-container">
      <input
        id={id}
        type={type}
        className={inputClasses}
        value={formDetails[id]}
        onChange={onChange}
        placeholder={!isError && placeholder}
      />
      {isError && <p className="error">{errors[`${id}Error`]}</p>}
    </div>
  );
}

const inputDetails = [
  { id: "firstName", type: "text", placeholder: "First Name" },
  { id: "lastName", type: "text", placeholder: "Last Name" },
  { id: "email", type: "text", placeholder: "Email Address" },
  { id: "password", type: "password", placeholder: "Password" },
];

SignUpForm.propTypes = {
  formDetails: PropTypes.object,
  errors: PropTypes.object,
  onChange: PropTypes.func,
  submitHandler: PropTypes.func,
};

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  formDetailsKey: PropTypes.string,
  formDetails: PropTypes.object,
  onChange: PropTypes.func,
  errors: PropTypes.object,
};

export default SignUpForm;
