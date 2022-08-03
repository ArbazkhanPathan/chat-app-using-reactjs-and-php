import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import Chat from './Chat';
function App() {
  return (
    <Router>
    <div className="container">
      
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/chat" element={<Chat/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
