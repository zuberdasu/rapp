import { initialState } from "./initialState";
import { storeItem, getItem } from "../localStorage";
import {
  ADD_USER,
  SET_SCREEN_MODE,
  UPDATE_USER,
  DELETE_USER,
  SET_SEARCH_TERM,
} from "./types";
import { generateRandomId } from "../utils";

export function reducer(state = getItem("store") || initialState, action) {
  switch (action.type) {
    case SET_SCREEN_MODE: {
      const newState = { ...state, screenMode: action.payload };

      storeItem("store", newState);

      return newState;
    }

    case ADD_USER: {
      const user = {
        id: generateRandomId(64),
        userName: action.payload.userName,
      };

      const newState = { ...state, user };

      storeItem("store", newState);

      return newState;
    }

    case UPDATE_USER: {
      const user = { ...state.user };

      user.userName = action.payload.userName;

      const newState = { ...state, user };

      storeItem("store", newState);

      return newState;
    }

    case DELETE_USER: {
      const newState = { ...state, user: {} };

      storeItem("store", newState);

      return newState;
    }

    case SET_SEARCH_TERM: {
      const newState = { ...state, searchTerm: action.payload };

      return newState;
    }

    default:
      return state;
  }
}
