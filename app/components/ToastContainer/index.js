import { toast } from 'react-toastify';
import { CONSTANT_TOASTY } from './constantToasty';

const Notice = ({ type, message }) => {
  if (type === CONSTANT_TOASTY.SUCCESS) {
    toast.success(message);
  }
  if (type === CONSTANT_TOASTY.ERROR) {
    toast.error(message);
  }
};

export default Notice;
