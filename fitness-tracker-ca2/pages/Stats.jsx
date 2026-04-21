// pages/Stats.jsx
import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { computeStats } from "../utils/validation";

const Stats = () => {
  const { state } = useContext(AppContext);

  const stats = computeStats(state.activities);

  useEffect(() => {
    window.appState = {
      totalActivities: stats.totalActivities,
      goalAchievedCount: stats.goalAchievedCount,
      goalNotAchievedCount: stats.goalNotAchievedCount,
    };
  }, [stats]);

  if (state.loading) return <div>Loading activities...</div>;
  if (state.error) return <div>Error: {state.error}</div>;

  return (
    <div className="stats-page">
      <h1>Activities Analysis</h1>
      <div className="stats-container">
        <div data-testid="total-activities" className="stat-box">
          <h2>Total Activities</h2>
          <p>{stats.totalActivities}</p>
        </div>

        <div data-testid="goal-achieved" className="stat-box">
          <h2>Goal Achieved</h2>
          <p>{stats.goalAchievedCount}</p>
        </div>

        <div data-testid="goal-not-achieved" className="stat-box">
          <h2>Goal Not Achieved</h2>
          <p>{stats.goalNotAchievedCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
