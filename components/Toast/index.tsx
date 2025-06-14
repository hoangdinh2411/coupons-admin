import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import classNames from "classnames";

type Props = {
  show: boolean;
  message: string;
  type: "success" | "error" | "warning" | "info";
  onClose: () => void;
};

const CustomToast: React.FC<Props> = ({ show, message, type, onClose }) => {
  const bgClass = {
    success: "bg-success text-white",
    error: "bg-danger text-white",
    warning: "bg-warning text-dark",
    info: "bg-info text-white",
  }[type];

  return (
    <ToastContainer
      className="position-fixed top-0 end-0 p-3"
      style={{ zIndex: 9999 }}
    >
      <Toast
        onClose={onClose}
        show={show}
        delay={2000}
        autohide
        className={classNames("border-0", bgClass)}
      >
        <Toast.Body className="text-white">{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default CustomToast;
