import React from "react";
import ReactDom from "react-dom";
// import "./Modal.css";

const Modal_Styles = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#fff",
  padding: "20px",
  zIndex: 1000,
};
const Overlay_Style = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 999,
};

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return ReactDom.createPortal(
    <>
      {/*  TODO move styles to css file */}
      <div style={Overlay_Style} />
      <div style={Modal_Styles}>
        <button onClick={onClose}>Close Modal</button>

        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Modal;
