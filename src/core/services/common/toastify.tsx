import { toast, ToastContainer, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const options: ToastOptions = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
}

export function Success(message: string) {
    toast.success(message, options);
}

export function Info(message: string) {
    toast.info(message, options);
}

export function Warning(message: string) {
    toast.warn(message, options);
}

export function Error(message: string) {
    toast.error(message, options);
}

export function Dark(message: string) {
    toast.error(message, options);
}

export default ToastContainer;