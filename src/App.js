
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './Common/header/Header';
import ProfileHeader from './Common/header/profileHeader/ProfileHeader';
import Footer from './Common/footer/Footer';

function App() {
  return (
    <div className="App">
    <Router>
    <Header />
      <Routes>
        <Route path='/' element={<Dashboard/>}/>    
        <Route path="/ProfileHeader" element={<ProfileHeader />} />


      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
