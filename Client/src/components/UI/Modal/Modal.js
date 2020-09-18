import React from "react";

import Backdrop from "../Backdrop/Backdrop";

import "../../../App.css";

export default function Modal({ children, show, cancelModal }) {
  return (
    <>
      <Backdrop show={show} clickFunction={cancelModal} />
      <div
        className={show ? "modal_container" : "modal_container_null"}
        style={{
          transform: show ? "translateY(0)" : "translateY(-100vh)",
          opacity: show ? 1 : 0,
        }}
      >
        {children}
      </div>
    </>
  );
}
