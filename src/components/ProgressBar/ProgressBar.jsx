import { useState, useEffect } from 'react';
import css from './ProgressBar.module.css';

const ProgressBar = ({ password, confirmPassword }) => {
  const [match, setMatch] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (confirmPassword.length === 0) {
      setProgress(0);
    } else if (confirmPassword <= password) {
      setProgress((confirmPassword.length / password.length) * 100);
      if (confirmPassword === password.slice(0, confirmPassword.length)) {
        setMatch(true);
      } else {
        setMatch(false);
      }
    } else {
      setProgress(100);
      if (confirmPassword === password) {
        setMatch(true);
      } else {
        setMatch(false);
      }
    }
  }, [password, confirmPassword]);

  return (
    <>
      <div className={css.progressBarBackground}>
        <div
          className={css.progressBar}
          style={{
            width: `${progress}%`,
            backgroundColor: match ? '#FFB627' : '#ff4b5c',
          }}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
