import React, { useEffect } from "react";
import Startup from "./components/Startup";
import Interface from "./components/Interface";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SET_SCREEN_MODE } from "./redux/types";

const App = () => {
  const [loading, setLoading] = useState(true); //local state
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const setInterface = () => {
    const payload = user.id ? 2 : 1;
    dispatch({ type: SET_SCREEN_MODE, payload });
    setLoading(false);
  };

  return (
    <>
      <button onClick={() => localStorage.clear()}>Clear localStorage</button>
      {loading ? <Startup /> : <Interface />}
      <button onClick={setInterface}>Continue</button>
    </>
  );
};

export default App;
