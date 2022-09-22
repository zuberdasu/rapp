import React, { useState } from "react";
import { ADD_USER } from "../redux/types";
import { useDispatch } from "react-redux";
import { validate } from "../validation";

const Onboarding = () => {
  const [userName, setUserName] = useState("");
  const [errors, setErrors] = useState();

  const dispatch = useDispatch();

  const onSubmit = () => {
    if (!errors) {
      dispatch({ type: ADD_USER, payload: userName });
      setUserName("");
    }
  };

  const onInput = (e) => {
    setUserName(e.target.value);

    const result = validate(1, { userName });

    if (result === true) {
      setErrors(undefined);
    } else {
      setErrors(result);
    }
  };

  return (
    <>
      <h1>Onboarding</h1>
      <input onInput={onInput} type="text" />
      <p>{errors && errors.userName}</p>
      <button onClick={onSubmit}>Signup</button>
    </>
  );
};

export default Onboarding;
