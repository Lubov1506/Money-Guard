import { Outlet } from 'react-router-dom';
import s from './Dashboard.module.css';
import { useMediaQuery } from 'react-responsive';

const Dashboard = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <>
      {!isTablet && !isDesktop && (
        <>
          <Header />
          <div className={s.divBackground}>
            <Navigation />
            <Balance />
            <Outlet />
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
            <Outlet />
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
            <Outlet />
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
