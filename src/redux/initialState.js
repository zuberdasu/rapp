import { user, allUsers, messages } from "../fakeApi";

export const initialState = {
  user,
  allUsers,
  messages,
  currentUserId: 0,
  screenMode: 0,
  loading: true,
};
