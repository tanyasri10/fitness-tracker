// pages/ActivityDetail.jsx
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import {
  isValidActivity,
  calculateEfficiency,
  getActivityId,
} from "../utils/validation";

const ActivityDetail = () => {
  const { id } = useParams();
  const { state } = useContext(AppContext);

  if (state.loading) return <div>Loading activity...</div>;
  if (state.error) return <div>Error: {state.error}</div>;

  const activity = state.activities.find(
    (act) => String(getActivityId(act)) === String(id)
  );

  if (!activity || !isValidActivity(activity)) {
    return <div>Activity not found</div>;
  }

  const efficiency = calculateEfficiency(
    activity.caloriesBurned,
    activity.workoutMinutes
  );

  return (
    <div className="activity-detail-page">
      <h1>{activity.name || "Unknown"}</h1>
      <div className="detail-info">
        <p>
          <strong>Activity ID:</strong> {getActivityId(activity)}
        </p>
        <p>
          <strong>Steps:</strong> {activity.steps}
        </p>
        <p>
          <strong>Calories Burned:</strong> {activity.caloriesBurned}
        </p>
        <p>
          <strong>Workout Minutes:</strong> {activity.workoutMinutes}
        </p>
        <p>
          <strong>Efficiency Score:</strong> {efficiency} cal/min
        </p>
        <p>
          <strong>Goal Achieved:</strong>{" "}
          {activity.goalAchieved ? "Yes" : "No"}
        </p>
        <p>
          <strong>Date:</strong> {activity.date || "No date"}
        </p>
      </div>
      <Link to="/activities">Back to Activities</Link>
    </div>
  );
};

export default ActivityDetail;
