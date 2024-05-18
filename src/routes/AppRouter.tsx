import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SignInPage from '../views/SignInPage/SignInPage';
import ProtectedRoute from './ProtectedRoute';
import UserProfilePage from '../views/ProfilePage/UserProfilePage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={SignInPage} />
        <Route path="/profile" element={<ProtectedRoute />}>
          <Route path="" element={<UserProfilePage />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
