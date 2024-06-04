import { toast } from 'react-toastify';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTrnThunk } from '../../redux/transactions/operations';
import { deleteToastStyles } from 'components/Toast/toastStyles';
import s from './DeleteToast.module.css';
import { prettyMoneyFormat } from 'helpers/prettyMoneyFormat';

const DeleteToast = () => {
  const [deletedIds, setDeletedIds] = useState([]);
  const dispatch = useDispatch();

  const showDeleteToast = (transactionId, sum, comment) => {
    let undo = false;

    setDeletedIds(prev => [...prev, transactionId]);
    const toastId = toast(
      <div className={s.undelete_toast}>
        <div className={s.infoContainer}>
          <p>You can still undo the operation</p>
        </div>
        <div className={s.info}>
          <p className={s.comment}>{comment} </p>
          <p className={s.sum}>{prettyMoneyFormat(sum)}</p>
        </div>
        <div className={s.btns}>
          <button
            className={s.delete_btn}
            onClick={() => {
              toast.dismiss(toastId);
            }}
          >
            Delete
          </button>
          <button
            className={s.undelete_btn}
            onClick={() => {
              undo = true;
              setDeletedIds(prev =>
                prev.filter(item => item !== transactionId)
              );
              toast.dismiss(toastId, deleteToastStyles);
            }}
          >
            Keep it!
          </button>
        </div>
      </div>,
      deleteToastStyles,
      {
        onClose: () => {
          if (!undo) {
            setDeletedIds(prev => prev.filter(item => item !== transactionId));
            dispatch(deleteTrnThunk(transactionId));
          }
        },
      }
    );
  };

  return { showDeleteToast, deletedIds };
};

export default DeleteToast;
