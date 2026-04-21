// context/AppContext.jsx
import React, { createContext, useReducer, useEffect } from "react";
import { appReducer, initialState } from "../reducer/AppReducer";
import { fetchActivities } from "../services/api";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    const loadActivities = async () => {
      try {
        const data = await fetchActivities();
        dispatch({ type: "SET_ACTIVITIES", payload: data });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: error.message });
      }
    };

    loadActivities();
  }, []);

  const toggleGoalAchieved = (activityID) => {
    dispatch({ type: "TOGGLE_GOAL_ACHIEVED", payload: activityID });
  };

  return (
    <AppContext.Provider value={{ state, toggleGoalAchieved }}>
      {children}
    </AppContext.Provider>
  );
};
