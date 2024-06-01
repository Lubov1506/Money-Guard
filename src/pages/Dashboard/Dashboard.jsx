import { Outlet } from 'react-router-dom';
import s from './Dashboard.module.css';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Balance from '../../components/Balance/Balance';
import Currency from '../../components/Currency/Currency';
import { Suspense } from 'react';
import MoneyLoader from '../../components/MoneyLoader/MoneyLoader';
import { useMedia } from '../../hooks/useMedia';

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
