import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Slide from './pages/Slide/Slide';
import Main from './pages/Main/Main';
import Navigation from './components/UI/Navigation';

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Slide />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
