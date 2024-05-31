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
        <Route index element={<p>HomeTab</p>} />
        <Route path="statistics" element={<p>StatisticsTab</p>} />
        <Route path="currency" element={<p>CurrencyTab</p>} />
      </Route>

      <Route
        path="register"
        element={
          <PublicRoute>
            <p>RegistrationPage</p>
          </PublicRoute>
        }
      />
      <Route
        path="login"
        element={
          <PublicRoute>
            <p>LoginPage</p>
          </PublicRoute>
        }
      />
      <Route path="*" element={<p>NotFoundPage</p>} />
    </Routes>
  );
}

export default App;
