import React, { useState, useReducer } from "react";
import "./styles.css";

const initialState = {
  name: "",
  email: "",
  password: "",
  passwordRepeat: "",
  termsAccepted: false
};

function reducer(state, action) {
  if (action.name === "termsAccepted") {
    //code checkbox
    return { ...state, termsAccepted: action.checked };
  } else {
    //code other inputs
    return { ...state, [action.name]: action.value };
  }
}

function validate(state) {
  return state.password === state.passwordRepeat;
}

const SignUp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  function handleClick(e) {
    e.preventDefault();
    alert(`Hey ${state.name} you have successfully registered!`);
  }

  function onChange(e) {
    const { name, value, checked } = e.target;
    const action = { name, value, checked };
    dispatch(action);
  }

  return (
    <div className="wrapper">
      <div className="wraptitle">
        <h1 className="registerTitle">Sign Up</h1>
      </div>

      <form className="registerForm">
        <input
          className="textInput"
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={onChange}
        />

        <input
          className="textInput"
          type="text"
          name="email"
          placeholder="Email"
          onChange={onChange}
        />

        <input
          className="textInput"
          type="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
        />

        <input
          className="textInput"
          type="password"
          name="passwordRepeat"
          placeholder="Confirm Password"
          onChange={onChange}
        />

        <label className="touCheckboxLabel">
          <input
            className="touCheckbox"
            type="checkbox"
            name="termsAccepted"
            onChange={onChange}
          />
          Accept Terms of Use!
        </label>

        <p className={!validate(state) ? "errorMessage" : "invisible"}>
          Please make sure your Passwords match
        </p>

        <button
          className={!validate(state) ? "disabled" : ""}
          onClick={handleClick}
          disabled={!validate(state)}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default SignUp;
