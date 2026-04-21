// pages/Filter.jsx
import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import ActivityItem from "../components/ActivityItem";
import { getActivityId, getValidActivities } from "../utils/validation";

const Filter = () => {
  const { state, toggleGoalAchieved } = useContext(AppContext);
  const [stepsInput, setStepsInput] = useState("");

  if (state.loading) return <div>Loading activities...</div>;
  if (state.error) return <div>Error: {state.error}</div>;

  const trimmedInput = stepsInput.trim();
  const hasInput = trimmedInput !== "";
  const parsedSteps = Number(trimmedInput);
  const hasError = hasInput && (!Number.isInteger(parsedSteps) || parsedSteps < 0);
  const errorMessage = hasError
    ? "Please enter a valid non-negative number"
    : "";
  const validActivities = getValidActivities(state.activities);
  const filteredActivities =
    hasInput && !hasError
      ? validActivities.filter((activity) => activity.steps >= parsedSteps)
      : [];

  return (
    <div className="filter-page">
      <h1>Filter Activities by Steps</h1>
      <div className="filter-form">
        <input
          type="number"
          placeholder="Enter minimum steps"
          value={stepsInput}
          onChange={(e) => setStepsInput(e.target.value)}
          min="0"
        />
      </div>

      {hasError && <div className="error-message">{errorMessage}</div>}

      {hasInput && !hasError && (
        <p>
          Found {filteredActivities.length} activities with steps >= {parsedSteps}
        </p>
      )}

      <div className="filtered-activities">
        {filteredActivities.map((activity) => (
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

export default Filter;
