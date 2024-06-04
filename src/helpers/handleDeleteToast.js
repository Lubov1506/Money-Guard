import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

export const handleDelete = (transactionId, sum, comment) => {
  const dispatch = useDispatch();

  let undo = false;
  console.log(new Set());
  setDeletetIds(prev => [...prev, transactionId]);
  const toastId = toast(
    <div className="undelete_toast">
      <h3>Delete ?</h3>
      <p>{comment} </p>
      <p>{Math.abs(sum)}</p>
      <button
        className="delete_btn"
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
          setDeletetIds(prev => prev.filter(item => item !== transactionId));

          toast.dismiss(toastId);
        }}
      >
        Undelete
      </button>
    </div>,
    {
      onClose: () => {
        if (!undo) {
          setDeletetIds(prev => prev.filter(item => item !== transactionId));
          dispatch(deleteTrnThunk(transactionId));
        }
      },
      autoClose: 3000,
      closeOnClick: false,
    }
  );
};
