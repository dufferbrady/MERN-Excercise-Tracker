import React from "react";

import classes from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div className={classes.container}>
      <div className={classes.top_bar}>Dashboard</div>
      <div className={classes.bottom_bar}>
        <div className={classes.bottom_left}>profile pic</div>
        <div className={classes.bottom_center}>recent workouts</div>
        <div className={classes.bottom_right}>graph slides</div>
      </div>
    </div>
  );
}

export default Dashboard;
