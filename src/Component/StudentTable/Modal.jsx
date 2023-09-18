import React, { useState } from "react";
import "./Model01.css";

//Define a functional component called Model, which takes three props: closeModal, onSubmit, and defaultValue
export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  //Intialize state variables using the useState hook
  const [formState, setFormState] = useState(
    defaultValue || {
      //Define initial value for frm fields
      // image:"",
      rollNo: "",
      name : "",
      education:"",
      mobile:"",
      email:"",
      admissionDate:""
      
    }
  );
  const [errors, setErrors] = useState(""); //Initialize errors state as an empty string

  //Define a function to validate the form fields
  const validateForm = () => {
    if (
      // formState.image &&
      formState.rollNo &&
      formState.name &&
      formState.education &&
      formState.mobile &&
      formState.email &&
      formState.admissionDate
    ) {
      //If all fields are filled, clear any previus errors and return true
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key); //Collect the names of empty fields
        }
      }
      setErrors(errorFields.join(", ")); //Set errors as a comma-separated list f empty fields
      return false;
    }
  };

  //Define a function to handle changes in form input fields
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  //Define a function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); //Prevent the default form submission behavior

    if (!validateForm()) return; //If the form is not valid, do not proceed with submission

    onSubmit(formState); //Call the onSubmit function with the formState data

    closeModal(); //Close the modal after submission
  };

  //Render the modal components with form element
  return (
    <div
      className="modal01-container01"
      onClick={(e) => {
        if (e.target.className === "modal01-container01") closeModal();
      }}
    >
      <div className="modal01">
        <form>
          <div className="form-group">
            <label htmlFor="rollNo">Roll No.</label>
            <input name="rollNo" onChange={handleChange} value={formState.rollNo} />
          </div>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input name="name" onChange={handleChange} value={formState.name} />
          </div>

          <div className="form-group">
            <label htmlFor="education">Education</label>
            <input name="education" onChange={handleChange} value={formState.education} />
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input name="mobile" onChange={handleChange} value={formState.mobile} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input name="email" onChange={handleChange} value={formState.email} />
          </div>

          <div className="form-group">
            <label htmlFor="admissionDate">Admission Date</label>
            <input name="admissionDate" onChange={handleChange} value={formState.admissionDate} />
          </div>

          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="btn01" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
