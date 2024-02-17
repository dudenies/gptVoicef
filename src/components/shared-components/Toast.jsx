import { toast } from "react-toastify";

export const toastCloseTimeout = 2000; // 2 seconds

export const CustomToast = ({ message, type = "success" }) => {
  if (type === "success") {
    console.log(message);
    return toast.success(message, {
      position: "top-right",
      autoClose: toastCloseTimeout,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } else if (type === "error") {
    return toast.error(message, {
      position: "top-right",
      autoClose: toastCloseTimeout,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } else if (type === "warning") {
    return toast.warning(message, {
      position: "top-right",
      autoClose: toastCloseTimeout,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } else if (type === "info") {
    return toast.info(message, {
      position: "top-right",
      autoClose: toastCloseTimeout,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};
