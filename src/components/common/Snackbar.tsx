import React, { useState, useEffect } from "react";
import { SnackbarProps } from "./interface";

const Snackbar: React.FC<SnackbarProps> = ({
  type,
  message,
  duration = 6000,
  onClose,
}) => {
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const handleClose = () => {
    setVisible(false);
    if (onClose) onClose();
  };
  return visible ? (
    <div
      className={`${
        type === "succeeded" ? "bg-green-500" : "bg-red-500"
      } z-50 py-2 px-4 rounded-md text-white text-center fixed top-2 right-4 flex gap-4`}
    >
      <p>{message}</p>
      <span className="cursor-pointer font-bold mt-1" onClick={handleClose}>
        <sup>X</sup>
      </span>
    </div>
  ) : null;
};

export default Snackbar;
