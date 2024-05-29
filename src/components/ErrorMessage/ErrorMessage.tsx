import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ErrorMessageProps } from "./ErrorMessage.types";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  useEffect(() => {
    if (message) {
      toast.error(message);
    }
  }, [message]);

  return <Toaster />;
};

export default ErrorMessage;
