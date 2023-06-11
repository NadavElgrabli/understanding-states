//Create a form component with an input field and a submit button.
//Display the value of the input field below the form when the submit button is clicked.
import React, { useState } from "react";

function Form() {
  // State variables to store the input value and submitted values
  const [inputValue, setInputValue] = useState("");
  const [submittedValues, setSubmittedValues] = useState([]);

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Add the current input value to the submitted values array
    setSubmittedValues([...submittedValues, inputValue]);

    // Reset the input value to an empty string
    setInputValue("");
  };

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Input field */}
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>

      {/* Display submitted values */}
      <div>
        {submittedValues.map((value, index) => (
          <div key={index}>{value}</div>
        ))}
      </div>
    </div>
  );
}

export default Form;
