import { Toast, ToastContainer } from 'react-toastify/dist/components';
import 'react-toastify/dist/ReactToastify.css';

const Toast = ({ closeToast, toastProps }) => (
  <div>
    Lorem ipsum dolor {toastProps.position}
    <button>Retry</button>
    <button onClick={closeToast}>Close</button>
  </div>
);
export default Toast;
