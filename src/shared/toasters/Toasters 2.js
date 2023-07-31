import toast from "react-hot-toast";

export const notifySucces = (text) => toast.success(text);
export const notifyError = (text) => toast.error(text);
