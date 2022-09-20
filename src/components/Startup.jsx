import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_SCREEN_MODE } from "../redux/types";

const Startup = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    setTimeout(() => {
      const payload = user.id ? 2 : 1;

      dispatch({ type: SET_SCREEN_MODE, payload });
    }, 1000);
  }, []);

  return (
    <>
      <h1>Loading...</h1>
      <p>Copyright 2022</p>
    </>
  );
};

export default Startup;
