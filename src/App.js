import React, { useEffect } from "react";
import Startup from "./components/Startup";
import Interface from "./components/Interface";
import { useSelector, useDispatch } from "react-redux";
import { SET_LOADING } from "./redux/types";

const App = () => {
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: SET_LOADING, payload: true });
  }, []);

  return (
    <>
      <button onClick={() => localStorage.clear()}>Clear localStorage</button>
      {loading ? <Startup /> : <Interface />}
    </>
  );
};

export default App;
