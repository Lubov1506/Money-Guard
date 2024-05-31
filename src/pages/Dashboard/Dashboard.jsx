import { Outlet } from 'react-router-dom';
import s from './Dashboard.module.css';
import { useMediaQuery } from 'react-responsive';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Balance from '../../components/Balance/Balance';
import Currency from '../../components/Currency/Currency';
import { Suspense } from 'react';
import MoneyLoader from '../../components/MoneyLoader/MoneyLoader';

const Dashboard = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <div className={s.wrapper}>
      {!isTablet && !isDesktop && (
        <>
          <Header />
          <div className={s.divBackground}>
            <Navigation />
            <Balance />
            <Suspense fallback={<MoneyLoader />}>
              <Outlet />
            </Suspense>
          </div>
        </>
      )}
      {isTablet && (
        <>
          <Header />
          <div className={s.divBackground}>
            <div className={s.noOutletWrapper}>
              <div className={s.navBalWrapper}>
                <Navigation />
                <Balance />
              </div>
              <Currency />
            </div>
            <Suspense fallback={<MoneyLoader />}>
              <Outlet />
            </Suspense>
          </div>
        </>
      )}

      {isDesktop && !isTablet && (
        <>
          <Header />
          <div className={s.divBackground}>
            <div className={s.noOutletWrapper}>
              <Navigation />
              <Balance />
              <Currency />
            </div>
            <Suspense fallback={<MoneyLoader />}>
              <Outlet />
            </Suspense>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
