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
            <p>Layout</p>
          </PrivateRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="home" element={<p>Home Tab</p>} />
        <Route path="statistics" element={<p>Statistics Tab</p>} />
        <Route path="currency" element={<p>Currency Tab</p>} />
      </Route>
      <Route
        path="register"
        element={
          <PublicRoute>
            <p>Registration Page</p>
          </PublicRoute>
        }
      />
      <Route
        path="login"
        element={
          <PublicRoute>
            <p>Login Page</p>
          </PublicRoute>
        }
      />
      <Route path="*" element={<p>Not Found Page</p>} />
    </Routes>
  );
}

export default App;
