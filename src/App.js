import logo from './logo.svg';
import './App.css';
import NotFound from './components/NotFound/NotFound';
import HomePage from './components/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/home' element={<HomePage></HomePage>}></Route>
        <Route path='/navbar' element={<Navbar></Navbar>}></Route>
        <Route path='/error-page' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
