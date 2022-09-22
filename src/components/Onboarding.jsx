import React, { useState } from "react";
import { ADD_USER } from "../redux/types";
import { useDispatch } from "react-redux";
import { validate } from "../validation";

const Onboarding = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();

  const onSubmit = () => {
    const result = validate(1, { userName });

    if (result === true) {
      dispatch({ type: ADD_USER, payload: userName });
      setUserName("");
    }
  };

  return (
    <>
      <h1>Onboarding</h1>
      <input onInput={(e) => setUserName(e.target.value)} type="text" />
      <button onClick={onSubmit}>Signup</button>
    </>
  );
};

export default Onboarding;
