import React from "react";
import Naviation from "./Navigation";
import { useSelector } from "react-redux";

const Contacts = () => {
  const allUsers = useSelector((state) => state.allUsers);
  const user = useSelector((state) => state.user);
  return (
    <>
      Contacts
      {user.friends &&
        allUsers.map((potentialFriend) => {
          if (
            user.friends.includes(potentialFriend.id) &&
            !user.blocked.includes(potentialFriend.id)
          ) {
            return (
              <h1 key={potentialFriend.userName}>{potentialFriend.userName}</h1>
            );
          } else {
            return false;
          }
        })}
      <Naviation />
    </>
  );
};

export default Contacts;
