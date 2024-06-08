import { Router, Route, Routes } from "react-router-dom";
import './App.css'
import Register from './components/register/Register';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
  )
}

export default App
