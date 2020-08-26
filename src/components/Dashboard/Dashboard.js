import React from "react";

import classes from "./Dashboard.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
  return (
    <div className={classes.container}>
      <div className={classes.top_bar}>
        <div className={classes.top_left_container}>
          <span className={classes.top_left1}>Dashboard</span>
          <div className={classes.top_left2}>
            <span className={classes.dashboard_span1}>Workouts</span>
            <span className={classes.dashboard_span2}>Weight</span>
          </div>
        </div>
        <div className={classes.top_right}>
          <button className={classes.dashboard_button}>
            <FontAwesomeIcon className={classes.dashboard_icon} icon={faPlus} />
            Add Workout
          </button>
        </div>
      </div>
      <div className={classes.bottom_bar}>
        <div className={classes.bottom_left}>profile pic</div>
        <div className={classes.bottom_center}>recent workouts</div>
        <div className={classes.bottom_right}>graph slides</div>
      </div>
    </div>
  );
}

export default Dashboard;
