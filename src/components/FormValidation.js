import React from "react";
import { useState } from "react";

function FormValidation() {
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [isValid, setValidation] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false);

  function handleUserChange(e) {
    setUsername((prevUser) => e.target.value);
  }

  function handlePassChange(e) {
    setPass((prevPass) => e.target.value);
  }

  function handleEmailChange(e) {
    setEmail((prevEmail) => e.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    if (validatePass(pass) && validateEmail(email) && validateUser(username)) {
      setValidation((prevState) => !prevState);
    }
  }

  function validatePass(password) {
    // Example validation: Password should be at least 6 characters long
    return password.length >= 6;
  }
  function validateUser(username) {
    // Example validation: Username should be at least 4 characters long
    return username.length >= 4;
  }
  function validateEmail(email) {
    // Example validation: Check if the email matches a regular expression pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  return (
    <div>
      FormValidation:
      <form onSubmit={handleSubmit}>
        <div>
          <label>username: </label>
          <input onChange={handleUserChange}></input>
          {isSubmitted && !validateUser(username) && (
            <div className="invalid-text">Invalid username</div>
          )}
        </div>
        <div>
          <label>password: </label>
          <input type="password" onChange={handlePassChange}></input>
          {isSubmitted && !validatePass(pass) && (
            <div className="invalid-text">Invalid password</div>
          )}
        </div>
        <div>
          <label>email: </label>
          <input onChange={handleEmailChange}></input>
          {isSubmitted && !validateEmail(email) && (
            <div className="invalid-text">Invalid email</div>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
      {isValid && <div className="valid-text">Passed validation check!</div>}
      {isSubmitted && !isValid && (
        <div className="invalid-text">Didn't Pass validation check!</div>
      )}
    </div>
  );
}

export default FormValidation;
