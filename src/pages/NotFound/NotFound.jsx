import FormButton from 'components/common/FormButton/FormButton';
import s from './NotFound.module.css';

import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <img src="/errorgirl.webp" alt="page-not-found" width="320" />
        <p className={s.error}>Woops, the page does not exist</p>
      </div>

      <Link to="/">
        <FormButton type="button" text={'Home'} variant={'multiColorButtton'} />
      </Link>
    </div>
  );
};

export default NotFound;
