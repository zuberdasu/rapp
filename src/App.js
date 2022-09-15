import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_USER } from "./redux/types";

const App = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => localStorage.clear()}>Clear localStorage</button>
      <input
        onInput={(e) => {
          setMessage(e.target.value);
        }}
        type="text"
      />
      <button
        onClick={() => {
          dispatch({ type: ADD_USER, payload: { userName: "Bobby xxi" } });
        }}
      >
        Add
      </button>
    </>
  );
};

export default App;
