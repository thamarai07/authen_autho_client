import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Registration from './components/registration';
import { useLocation } from 'react-router-dom';
import Login from './components/login';
import DashBoard from './components/DashBoard';
import ProdectedRoute from './components/ProdectedRoute';
function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/registration" && location.pathname !== "/login" && <Navbar />}

      <Routes>
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/user' element={<ProdectedRoute><DashBoard /></ProdectedRoute>} />
      </Routes>
    </div>
  );
}

export default App;
