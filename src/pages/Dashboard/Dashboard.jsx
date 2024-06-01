import { Outlet } from 'react-router-dom';
import s from './Dashboard.module.css';
import { Suspense } from 'react';
import { useMedia } from '../../hooks/useMedia';
import {
  Balance,
  Currency,
  Header,
  MoneyLoader,
  Navigation,
} from '../../components';

const Dashboard = () => {
  const { isDesktop, isTablet } = useMedia();
  return (
    <>
      <Header />
      <div className={s.divBackground}>
        {isDesktop ? (
          <>
            <div className={s.noOutletWrapper}>
              <Navigation />
              <Balance />
              <Currency />
            </div>
          </>
        ) : isTablet ? (
          <>
            <div className={s.noOutletWrapper}>
              <div className={s.navBalWrapper}>
                <Navigation />
                <Balance />
              </div>
              <Currency />
            </div>
          </>
        ) : (
          <>
            <Navigation />
            <Balance />
          </>
        )}
        <Suspense fallback={<MoneyLoader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Dashboard;
