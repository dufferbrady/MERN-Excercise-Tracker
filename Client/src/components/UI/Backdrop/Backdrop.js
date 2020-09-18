import React from "react";

import "../../../App.css";

export default function Backdrop({ show, clickFunction }) {
  return (
    <div>
      {show ? <div className="Backdrop" onClick={clickFunction}></div> : null}
    </div>
  );
}
