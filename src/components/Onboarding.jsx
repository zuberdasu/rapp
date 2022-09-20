import React, { useState } from "react";
import { ADD_USER } from "../redux/types";
import { useDispatch } from "react-redux";

const Onboarding = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <h1>Onboarding</h1>
      <input onInput={(e) => setUserName(e.target.value)} type="text" />
      <button
        onClick={() => {
          dispatch({ type: ADD_USER, payload: userName });
          setUserName("");
        }}
      >
        Signup
      </button>
    </>
  );
};

export default Onboarding;
