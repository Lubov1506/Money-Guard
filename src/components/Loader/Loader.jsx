import { Watch } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <>
      <div className={s.backdrop}></div>
      <div className={s.loader}>
        <Watch
          visible={true}
          height="80"
          width="80"
          radius="48"
          color="#ffd8d0"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </>
  );
};

export default Loader;
