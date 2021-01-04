import React from "react";

import styles from "./Loader.module.css";

const spinner = ({ style, text }) => (
  <div
    style={{
      ...style,
    }}
    className={styles.Loader}
  >
    {text}
  </div>
);

export default spinner;
