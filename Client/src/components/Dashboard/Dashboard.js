import React, { useContext } from "react";

import classes from "./Dashboard.module.css";

import { GlobalContext } from "../../context/GlobalState";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
  const { workouts } = useContext(GlobalContext);

  //   console.log(workouts.map((workout) => workout.date));

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
        <div className={classes.bottom_left}>
          <img
            className={classes.profile_pic}
            src="/img/andy_profile.jpg"
            alt=""
          />
          <span className={classes.dashboard_welcome}>Andy Brady</span>
          <button
            style={{
              width: "75%",
              marginTop: "25px",
              background: "#00adb5",
              color: "white",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              fontWeight: "500",
            }}
            className={classes.dashboard_button}
          >
            Edit Profile
          </button>
        </div>
        <div className={classes.bottom_center}>
          <div className={classes.transactionHistory_header}>
            Workout History
          </div>
          <ul className={classes.transactionHistory_list}>
            {workouts.map((workout, i) => (
              <div key={`${i}_${workout._id}`} className={classes.list}>
                <li className={classes.transactionHistory_listItem}>
                  {workout.name}
                  {workout.date}
                </li>
              </div>
            ))}
          </ul>
        </div>
        <div className={classes.bottom_right}>graph slides</div>
      </div>
    </div>
  );
}

export default Dashboard;
