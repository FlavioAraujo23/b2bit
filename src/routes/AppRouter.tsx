import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../App';

const AppRouter = () => {
  return (
    <Router>
      <Route path="/" Component={App} />
    </Router>
  );
};

export default AppRouter;
