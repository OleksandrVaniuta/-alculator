import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function infoMessageNotify(message) {
  toast.info(message, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
}

function errorMessageNotify(message) {
  toast.error(message, {
    position: 'top-center',
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
}

function successMessageNotify(message) {
  toast.success(message, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
}

const Notify = {
  errorMessageNotify,
  infoMessageNotify,
  successMessageNotify,
};

export default Notify;
