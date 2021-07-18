import React, { useContext, useState } from "react";

export const StateContext = React.createContext();

export function useStateContext() {
  return useContext(StateContext);
}

export function AnimeProvider({ children }) {
  const [user, setUser] = useState("");
  const defaultUserImg =
    "https://64.media.tumblr.com/aff77a5654714c116ad0c49614627f36/bfcd8ae368925e4c-74/s500x750/b3907c665e803208a13075d5ee3197bdc70e46cd.jpg";
  const createUserAction = (e) => {
    setUser(e.target.value);
  };
  return (
    <StateContext.Provider
      value={{
        user,
        createUserAction,
        defaultUserImg,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
