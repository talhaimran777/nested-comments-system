import React from "react";

export const AppContext = React.createContext({
  comments: [],
  setComments: () => {},
});

export const Provider = AppContext.Provider;
export const Consumer = AppContext.Consumer;
