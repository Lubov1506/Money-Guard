import { useEffect } from 'react';
import s from './Modal.module.css';
const Modal = ({ children, onClose }) => {
  const handleBackDropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);
  return (
    <div className={s.wrapper} onClick={handleBackDropClick}>
      {/* <div className={s.content}> */}
      {/* <button className={s.closeBtn} onClick={onClose}>
          ×
        </button> */}
      {children}
      {/* </div> */}
    </div>
  );
};

export default Modal;
