import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from './redux/auth/selectors';
import { refreshUserThunk } from './redux/auth/operations';
import { lazy } from 'react';
import Loader from './components/Loader/Loader';
import { Dashboard, LoginPage, NotFound, RegistrationPage } from './pages';
import { PrivateRoute, PublicRoute } from './routes';

const CurrencyTab = lazy(() => import('./pages/CurrencyTab/CurrencyTab'));
const HomeTab = lazy(() => import('./pages/HomeTab/HomeTab'));
const StatisticsTab = lazy(() => import('./pages/StatisticsTab/StatisticsTab'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
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
            <Route path="currency" element={<CurrencyTab />} />
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
