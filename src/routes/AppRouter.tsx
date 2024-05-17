import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInPage from '../views/SignInPage/SignInPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={SignInPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
