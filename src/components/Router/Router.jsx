import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { ROUTES } from './routes';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <ProtectedRoute authorizedRoles={route.roles} isProtected={route.isProtected}>
                {route.component}
              </ProtectedRoute>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
