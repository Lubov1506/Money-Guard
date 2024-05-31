import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
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
        path="register"
        element={
          <PublicRoute>
            <RegistrationPage />
          </PublicRoute>
        }
      />
      <Route
        path="login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route path="*" element={<p>Not Found Page</p>} />
    </Routes>
  );
}

export default App;
