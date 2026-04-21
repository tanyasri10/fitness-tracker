// pages/Activities.jsx
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ActivityItem from "../components/ActivityItem";
import { getActivityId, getValidActivities } from "../utils/validation";

const Activities = () => {
  const { state, toggleGoalAchieved } = useContext(AppContext);

  if (state.loading) return <div>Loading activities...</div>;
  if (state.error) return <div>Error: {state.error}</div>;

  const validActivities = getValidActivities(state.activities);

  return (
    <div className="activities-page">
      <h1>All Activities</h1>
      <p>Total Valid Activities: {validActivities.length}</p>
      <div className="activities-list">
        {validActivities.map((activity) => (
          <ActivityItem
            key={getActivityId(activity)}
            activity={activity}
            onToggle={toggleGoalAchieved}
          />
        ))}
      </div>
    </div>
  );
};

export default Activities;
