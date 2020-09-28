import React, { createContext, useContext, useReducer } from "react";

// ThIS IS THE DATA LAYER
export const StateContext = createContext();

// BUILD A PROVIDER

export const StateProvider = ({ reducer, intialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, intialState)}>
    {children}
  </StateContext.Provider>
);
// THIS IS HOW WE USE IT INSIDE OF A COMPONENT

export const useStateValue = () => useContext(StateContext);
