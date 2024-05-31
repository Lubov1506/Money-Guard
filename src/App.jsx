import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import Dashboard from './pages/Dashboard/Dashboard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from './redux/auth/selectors';
import { selectIsLoading } from './redux/transactions/selectors';
import { refreshUserThunk } from './redux/auth/operations';
import Loader from './components/Loader/Loader';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import CurrencyTab from './components/CurrencyTab/CurrencyTab';
import NotFound from "./pages/NotFound/NotFound";


function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  return (
    <>
      {(isLoading || isRefreshing) && <Loader />}

      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route index element={<p>HomeTab</p>} />
          <Route path="statistics" element={<p>StatisticsTab</p>} />
          <Route path="currency" element={<CurrencyTab/>} />
        </Route>

        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegistrationPage/>
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage/>
            </PublicRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
