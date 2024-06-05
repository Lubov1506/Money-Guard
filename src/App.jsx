import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from './redux/auth/selectors';
import { refreshUserThunk } from './redux/auth/operations';
import { lazy } from 'react';
import { PrivateRoute, PublicRoute } from './routes';
import Loader from 'components/Loader/Loader';
import { Dashboard, LoginPage, NotFound, RegistrationPage } from './pages';
import { useMedia } from './hooks';

const CurrencyTab = lazy(() => import('./pages/CurrencyTab/CurrencyTab'));
const HomeTab = lazy(() => import('./pages/HomeTab/HomeTab'));
const StatisticsTab = lazy(() => import('./pages/StatisticsTab/StatisticsTab'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  const { isMobile } = useMedia();
  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route index element={<HomeTab />} />
            <Route path="statistics" element={<StatisticsTab />} />
            {isMobile ? (
              <Route path="currency" element={<CurrencyTab />} />
            ) : (
              <Route path="currency" element={<Navigate to="/" />} />
            )}
          </Route>

          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegistrationPage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
}

export default App;
